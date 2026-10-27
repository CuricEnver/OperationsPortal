import { ArrowLeftRight, Plus, Minus } from "lucide-react";

import TwoPaneLayout from "../../../layouts/TwoPaneLayout";

import Region from "../../../layouts/components/Region/Region";
import Section from "../../../layouts/components/Section/Section";

import Header from "../../../components/composite/Header";
import Footer from "../../../components/composite/Footer";
import Form from "../../../components/composite/Form";
import Field from "../../../components/composite/Field";
import List from "../../../components/composite/List/List";
import ListItem from "../../../components/composite/List/components/ListItem";

import Input from "../../../components/primitive/Input";
import Selector from "../../../components/primitive/Selector";
import Button from "../../../components/primitive/Button";

import useSites from "../../../context/Sites/useSites";

const transactionTypes = [
    {
        id: "receipt",
        label: "Receipt",
    },
    {
        id: "issue",
        label: "Issue",
    },
    {
        id: "transfer",
        label: "Transfer",
    },
    {
        id: "adjustment",
        label: "Adjustment",
    },
];

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
];

const locations = [
    {
        id: 1,
        label: "Warehouse A > Section A > Rack A",
    },
    {
        id: 2,
        label: "Warehouse A > Section A > Rack B",
    },
    {
        id: 3,
        label: "Stockroom > Shelf 2",
    },
];

const InventoryTransactions = () => {
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
                    title="Inventory Transactions"
                    subtitle={`${activeSite?.name} - ${activeSubsite?.name} - Record and review Inventory`}
                    icon={ArrowLeftRight}
                />
            }
            right={
                <>
                    <Header
                        title="Recent Transactions"
                        size="medium"
                    />

                    <Region>
                        <Section
                            scrollable
                        >
                            <List>
                                <ListItem
                                    title="Receipt • 100001 - Hex Bolt"
                                    description="+500 • Warehouse A > Section A > Rack A"
                                />

                                <ListItem
                                    title="Issue • 100001 - Hex Bolt"
                                    description="-30 • Warehouse A > Section A > Rack A"
                                />

                                <ListItem
                                    title="Transfer • 100002 - Flat Washer"
                                    description="100 • Rack B → Stockroom > Shelf 2"
                                />

                                <ListItem
                                    title="Adjustment • 100003 - Mounting Bracket"
                                    description="-2 • Warehouse A > Section A > Rack B"
                                />

                                                                <ListItem
                                    title="Transfer • 100002 - Flat Washer"
                                    description="100 • Rack B → Stockroom > Shelf 2"
                                />

                                <ListItem
                                    title="Adjustment • 100003 - Mounting Bracket"
                                    description="-2 • Warehouse A > Section A > Rack B"
                                />
                            </List>
                        </Section>
                    </Region>
                </>
            }
            left={
                <>
                    <Header
                        title="Transaction Details"
                        size="medium"
                    />

                    <Region>
                        <Section
                            scrollable
                        >
                            <Form
                                columns={1}
                            >
                                <Field
                                    label="Transaction Type"
                                    size="medium"
                                >
                                    <Selector
                                        options={transactionTypes}
                                        getKey={(type) => type.id}
                                        getLabel={(type) => type.label}
                                        onChange={() => {}}
                                    />
                                </Field>

                                <Field
                                    label="Item"
                                    size="medium"
                                >
                                    <Selector
                                        options={items}
                                        searchable
                                        getKey={(item) => item.id}
                                        getLabel={(item) =>
                                            `${item.itemNumber} - ${item.name}`
                                        }
                                        onChange={() => {}}
                                    />
                                </Field>

                                <Field
                                    label="Location"
                                    size="medium"
                                >
                                    <Selector
                                        options={locations}
                                        searchable
                                        getKey={(location) => location.id}
                                        getLabel={(location) => location.label}
                                        onChange={() => {}}
                                    />
                                </Field>

                                <Field
                                    label="Quantity"
                                    size="medium"
                                >
                                    <Input
                                        type="number"
                                        placeholder="Enter quantity..."
                                    />
                                </Field>

                                <Field
                                    label="Reference"
                                    size="medium"
                                >
                                    <Input
                                        placeholder="Optional reference..."
                                    />
                                </Field>
                            </Form>
                        </Section>
                    </Region>
                    <Footer
                        variant="full"
                    >
                        <Button>
                            <Plus className="size-4" />
                            Create Transcation
                        </Button>
                        <Button>
                            <Minus className="size-4" />
                            Delete Transaction
                        </Button>
                    </Footer>
                </>
            }
        />
    );
};

export default InventoryTransactions;