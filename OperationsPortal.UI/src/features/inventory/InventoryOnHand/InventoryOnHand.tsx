import { Boxes } from "lucide-react";

import ThreePaneLayout from "../../../layouts/ThreePaneLayout";

import Region from "../../../layouts/components/Region/Region";
import Section from "../../../layouts/components/Section/Section";

import Header from "../../../components/composite/Header";
import List from "../../../components/composite/List/List";
import ListItem from "../../../components/composite/List/components/ListItem";
import Field from "../../../components/composite/Field";
import Form from "../../../components/composite/Form";

import Selector from "../../../components/primitive/Selector";

import useSites from "../../../context/Sites/useSites";

const items = [
    {
        id: 1,
        itemNumber: "100001",
        name: "Hex Bolt",
    },
    {
        id: 2,
        itemNumber: "100002",
        name: "Flat Washer",
    },
    {
        id: 3,
        itemNumber: "100003",
        name: "Mounting Bracket",
    },
    {
        id: 4,
        itemNumber: "100004",
        name: "Control Housing",
    },
];

const scopes = [
    {
        id: "subsite",
        label: "Current Subsite",
    },
    {
        id: "site",
        label: "Current Site",
    },
    {
        id: "global",
        label: "All Sites",
    },
];

const InventoryOnHand = () => {
    const {
        sites,
        subsites,
        currentSite,
        currentSubsite,
    } = useSites();

    const activeSite = sites.find(
        (site) => site.id === currentSite,
    );

    const activeSubsite = subsites.find(
        (subsite) => subsite.id === currentSubsite,
    );

    return (
        <ThreePaneLayout
            leftMinSize={300}
            centerMinSize={325}
            rightMinSize={400}
            top={
                <Header
                    title="Inventory On Hand"
                    subtitle={`${activeSite?.name} > ${activeSubsite?.name} • Current inventory availability`}
                    icon={Boxes}
                />
            }
            left={
                <>
                    <Header
                        title="Inventory Search"
                        size="medium"
                    />

                    <Region>
                        <Section>
                            <Form columns={1}>
                                <Field
                                    label="Item"
                                    size="medium"
                                >
                                    <Selector
                                        options={items}
                                        searchable
                                        clearable
                                        getKey={(item) =>
                                            item.id
                                        }
                                        getLabel={(item) =>
                                            `${item.itemNumber} - ${item.name}`
                                        }
                                        onChange={() => {}}
                                    />
                                </Field>

                                <Field
                                    label="Search Scope"
                                    size="medium"
                                >
                                    <Selector
                                        options={scopes}
                                        getKey={(scope) =>
                                            scope.id
                                        }
                                        getLabel={(scope) =>
                                            scope.label
                                        }
                                        onChange={() => {}}
                                    />
                                </Field>
                            </Form>
                        </Section>
                    </Region>
                </>
            }
            center={
                <>
                    <Header
                        title="Inventory Locations"
                        subtitle="Hex Bolt • 3 locations found"
                        size="medium"
                    />

                    <Region>
                        <Section scrollable>
                            <List>
                                <ListItem
                                    title="Warehouse A > Section A > Rack A"
                                    description="200 units on hand"
                                    isSelected
                                />

                                <ListItem
                                    title="Warehouse A > Section A > Rack B"
                                    description="125 units on hand"
                                />

                                <ListItem
                                    title="Stockroom > Shelf 2"
                                    description="175 units on hand"
                                />
                            </List>
                        </Section>
                    </Region>
                </>
            }
            right={
                <>
                    <Header
                        title="Rack A"
                        subtitle="Warehouse A > Section A"
                        size="medium"
                    />

                    <Region scrollable>
                        <Header
                            title="Availability"
                            size="small"
                        />

                        <Section>
                            <List>
                                <ListItem
                                    title="On Hand"
                                    description="200 units"
                                />

                                <ListItem
                                    title="Reserved"
                                    description="30 units"
                                />

                                <ListItem
                                    title="Available"
                                    description="170 units"
                                />
                            </List>
                        </Section>

                        <Header
                            title="Item Information"
                            size="small"
                        />

                        <Section>
                            <List>
                                <ListItem
                                    title="Item Number"
                                    description="100001"
                                />

                                <ListItem
                                    title="Item Name"
                                    description="Hex Bolt"
                                />

                                <ListItem
                                    title="Unit of Measure"
                                    description="Each"
                                />
                            </List>
                        </Section>
                    </Region>
                </>
            }
        />
    );
};

export default InventoryOnHand;