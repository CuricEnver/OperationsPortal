import { MapPinned, Plus, Save, Trash } from "lucide-react";

import useSites from "../../../context/Sites/useSites";

import TwoPaneLayout from "../../../layouts/TwoPaneLayout";

import Region from "../../../layouts/components/Region/Region";
import Section from "../../../layouts/components/Section/Section";

import Header from "../../../components/composite/Header";
import Footer from "../../../components/composite/Footer";
import Form from "../../../components/composite/Form";
import Field from "../../../components/composite/Field";

import Input from "../../../components/primitive/Input";
import Selector from "../../../components/primitive/Selector";
import Button from "../../../components/primitive/Button";

import Tree from "../../../components/composite/Tree/componnets/Tree";

import useInventoryLocations from "./useInventoryLocations";

const InventoryLocations = () => {

    const {
        locationTree,
        locationTypes,
        parentLocations,

        selectedLocation,

        locationFilter,
        setLocationFilter,

        handleSelectLocation,
        handleCreateLocation,
        handleSaveLocation,
        handleDeleteLocation,
    } = useInventoryLocations();

    const {
        sites,
        subsites,
        currentSite,
        currentSubsite,
    } = useSites();

    const activeSite = sites.find(
        (site) => site.id === currentSite
    );

    const activeSubsite = subsites.find(
        (subsite) => subsite.id === currentSubsite
    );  

    return (
        <TwoPaneLayout
            top={
                <Header
                    title="Inventory Locations"
                    subtitle={`${activeSite?.name} - ${activeSubsite?.name} - Configure inventory location hierarchy`}
                    icon={MapPinned}
                />
            }

            left={
                <>
                    <Header
                        title="Location Hierarchy"
                        size="medium"
                    />

                    <Region>
                        <Section>
                            <Input
                                type="search"
                                placeholder="Search locations..."
                                value={locationFilter}
                                onChange={(event) => setLocationFilter(event.target.value)}
                            />
                        </Section>

                        <Section
                            scrollable
                        >
                            <Tree
                                nodes={locationTree}
                                selectedId={selectedLocation?.id ?? undefined}
                                onSelect={(node) =>
                                    handleSelectLocation(Number(node.id))
                                }
                            />
                        </Section>
                    </Region>

                    <Footer
                        variant="full"
                    >
                        <Button
                            onClick={handleCreateLocation}
                        >
                            <Plus className="size-4" />
                            Create Inventory Location
                        </Button>
                    </Footer>
                </>
            }

            right={
                !selectedLocation ? (
                    <Region>
                        <Section>
                            <div className="flex h-full items-center justify-center p-xl">
                                <div className="flex flex-col gap-sm text-center">
                                    <span className="text-header-medium font-semibold text-primary">
                                        No Location Selected
                                    </span>

                                    <span className="text-medium text-text-subtle">
                                        Select a location to edit, or click Create Inventory
                                        Location to create a new location.
                                    </span>
                                </div>
                            </div>
                        </Section>
                    </Region>
                ) : (
                    <>
                        <Header
                            title={
                                selectedLocation.id === null
                                    ? "Create Location"
                                    : `Edit ${selectedLocation.name}`
                            }
                            size="medium"
                        />

                        <Region>
                            <Section
                                scrollable
                            >
                                <Form>
                                    <Field
                                        label="Location Name"
                                        size="medium"
                                    >
                                        <Input
                                            value={selectedLocation.name}
                                        />
                                    </Field>

                                    <Field
                                        label="Description"
                                        size="medium"
                                    >
                                        <Input
                                            value={selectedLocation.description}
                                        />
                                    </Field>

                                    <Field
                                        label="Location Type"
                                        size="medium"
                                    >
                                        <Selector
                                            options={locationTypes}
                                            getKey={(type) => type.id}
                                            getLabel={(type) => type.label}
                                            onChange={() => {}}
                                        />
                                    </Field>

                                    <Field
                                        label="Parent Location"
                                        size="medium"
                                    >
                                        <Selector
                                            options={parentLocations}
                                            getKey={(location) => location.id}
                                            getLabel={(location) => location.label}
                                            onChange={() => {}}
                                        />
                                    </Field>
                                </Form>
                            </Section>
                        </Region>

                        <Footer>
                            <Button
                                color="danger"
                                onClick={handleDeleteLocation}
                            >
                                <Trash className="size-4" />
                                Delete Location
                            </Button>

                            <Button
                                onClick={handleSaveLocation}
                            >
                                <Save className="size-4" />
                                Save Location
                            </Button>
                        </Footer>
                    </>
                )
            }
        />
    );
};

export default InventoryLocations;