import { Box, Plus, Save, Trash } from "lucide-react";

import TwoPaneLayout from "../../../layouts/TwoPaneLayout";

import Region from "../../../layouts/components/Region/Region";
import Section from "../../../layouts/components/Section/Section";

import Header from "../../../components/composite/Header";
import Footer from "../../../components/composite/Footer";
import List from "../../../components/composite/List/List";
import ListItem from "../../../components/composite/List/components/ListItem";
import Form from "../../../components/composite/Form";
import Field from "../../../components/composite/Field";

import Input from "../../../components/primitive/Input";
import Selector from "../../../components/primitive/Selector";
import Button from "../../../components/primitive/Button";

import useInventoryCatalog from "./useInventoryCatalog";


const itemTypes = [
    {
        id: 1,
        label: "Component",
    },
    {
        id: 2,
        label: "Assembly",
    },
    {
        id: 3,
        label: "Finished Good",
    },
];

const unitsOfMeasure = [
    {
        id: 1,
        label: "Each",
    },
    {
        id: 2,
        label: "Foot",
    },
    {
        id: 3,
        label: "Pound",
    },
];

const InventoryCatalog = () => {

    const {
        selectedItem,

        itemFilter,
        setItemFilter,

        filteredItems,

        handleCreateItem,
        handleDeleteItem,
        handleLeadTimeChange,
        handleSaveItem,
        handleSelectItem
    } = useInventoryCatalog();

    return (
        <TwoPaneLayout
            top={
                <Header
                    title="Item Catalog"
                    subtitle="Create and maintain inventory item definitions."
                    icon={Box}
                />
            }

            left={
                <>
                    <Header
                        title="Items"
                        subtitle="4 items"
                        size="medium"
                    />

                    <Region>
                        <Section>
                            <Input
                                type="search"
                                placeholder="Search items..."
                                value={itemFilter}
                                onChange={(event) => setItemFilter(event.target.value)}
                            />
                        </Section>

                        <Section
                            scrollable
                        >
                            <List>
                                {filteredItems.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        title={`${item.itemNumber} - ${item.itemName}`}
                                        description="Item"
                                        isSelected={
                                            selectedItem?.id === item.id
                                        }
                                        onClick={() =>
                                            handleSelectItem(item)
                                        }
                                    />
                                ))}
                            </List>
                        </Section>
                    </Region>

                    <Footer
                        variant="full"
                    >
                        <Button
                            onClick={handleCreateItem}
                        >
                            <Plus className="size-4" />
                            Create New Item
                        </Button>
                    </Footer>
                </>
            }

            right={
                <>
                    <Header
                        title="Edit Item"
                        size="medium"
                    />

                    <Region>
                        <Section
                            scrollable
                        >
                            <Form>
                                <Field
                                    label="Item Number"
                                    size="medium"
                                >
                                    <Input
                                        value={selectedItem?.itemNumber ?? ""}
                                    />
                                </Field>

                                <Field
                                    label="Item Name"
                                    size="medium"
                                >
                                    <Input
                                        value={selectedItem?.itemName ?? ""}
                                    />
                                </Field>

                                <Field
                                    label="Item Type"
                                    size="medium"
                                >
                                    <Selector
                                        options={itemTypes}
                                        getKey={(type) => type.id}
                                        getLabel={(type) => type.label}
                                        onChange={() => {}}
                                    />

                                </Field>

                                <Field
                                    label="Unit of Measure"
                                    size="medium"
                                >
                                    <Selector
                                        options={unitsOfMeasure}
                                        getKey={(unit) => unit.id}
                                        getLabel={(unit) => unit.label}
                                        onChange={() => {}}
                                    />

                                </Field>

                                <Field
                                    label="Purchase Lead Time (Days)"
                                    size="medium"
                                >
                                    <Input
                                        type="number"
                                        min={0}
                                        step={1}
                                        value={selectedItem?.purchaseLeadTimeDays ?? ""}
                                        onChange={(event) =>
                                            handleLeadTimeChange(
                                                "purchaseLeadTimeDays",
                                                event.target.value === ""
                                                    ? null
                                                    : Number(event.target.value),
                                            )
                                        }
                                    />
                                </Field>

                                <Field
                                    label="Assembly Lead Time (Days)"
                                    size="medium"
                                >
                                    <Input
                                        type="number"
                                        min={0}
                                        step={1}
                                        value={selectedItem?.assemblyLeadTimeDays ?? ""}
                                        onChange={(event) =>
                                            handleLeadTimeChange(
                                                "assemblyLeadTimeDays",
                                                event.target.value === ""
                                                    ? null
                                                    : Number(event.target.value),
                                            )
                                        }
                                    />
                                </Field>

                                <Field
                                    label="Description"
                                    size="medium"
                                >
                                    <Input
                                        value={selectedItem?.description ?? ""}
                                    />
                                </Field>
                            </Form>
                        </Section>
                    </Region>

                    <Footer>
                        <Button 
                            color="danger"
                            onClick={handleDeleteItem}
                        >
                            <Trash className="size-4" />
                            Delete Item
                        </Button>

                        <Button
                            onClick={handleSaveItem}
                        >
                            <Save className="size-4" />
                            Save Item
                        </Button>
                    </Footer>
                </>
            }
        />
    );
};

export default InventoryCatalog;