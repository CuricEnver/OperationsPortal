import { Network } from "lucide-react";

import ThreePaneLayout from "../../../layouts/ThreePaneLayout";
import Region from "../../../layouts/components/Region/Region";
import Section from "../../../layouts/components/Section/Section";
import Header from "../../../components/composite/Header";
import Footer from "../../../components/composite/Footer";
import Field from "../../../components/composite/Field";
import Selector from "../../../components/primitive/Selector";
import Button from "../../../components/primitive/Button";
import Input from "../../../components/primitive/Input";
import Form from "../../../components/composite/Form";
import List from "../../../components/composite/List/List";
import ListItem from "../../../components/composite/List/components/ListItem";
import Tree from "../../../components/composite/Tree/componnets/Tree";

// select bom, load bom structure, select bom node, enable add bom node (as child), add bom node clicked
// reveal bom form, save component, insert component

const bomTree = [
    {
        id: 1,
        label: "200001 - Motor Assembly",
        children: [
            {
                id: 2,
                label: "100101 - Housing (1)",
            },
            {
                id: 3,
                label: "100102 - Rotor (1)",
            },
            {
                id: 4,
                label: "100103 - Bearing (2)",
            },
            {
                id: 5,
                label: "200002 - Fastener Kit (1)",
                children: [
                    {
                        id: 6,
                        label: "100201 - Hex Bolt (4)",
                    },
                    {
                        id: 7,
                        label: "100202 - Flat Washer (4)",
                    },
                    {
                        id: 8,
                        label: "100203 - Hex Nut (4)",
                    },
                ],
            },
            {
                id: 9,
                label: "200003 - Gearbox Assembly (1)",
                children: [
                    {
                        id: 10,
                        label: "100301 - Gear Set (1)",
                    },
                    {
                        id: 11,
                        label: "100302 - Output Shaft (1)",
                    },
                    {
                        id: 12,
                        label: "100303 - Bearing (2)",
                    },
                ],
            },
        ],
    },
];

const boms = [
    {
        id: 1,
        itemNumber: "200001",
        name: "Motor Assembly",
        revision: "A",
    },
    {
        id: 2,
        itemNumber: "200002",
        name: "Fastener Kit",
        revision: "B",
    },
    {
        id: 3,
        itemNumber: "200003",
        name: "Gearbox Assembly",
        revision: "A",
    },
    {
        id: 4,
        itemNumber: "200004",
        name: "Control Cabinet",
        revision: "C",
    },
    {
        id: 5,
        itemNumber: "200005",
        name: "Pump Assembly",
        revision: "A",
    },
    {
        id: 6,
        itemNumber: "200006",
        name: "Power Distribution Panel",
        revision: "A",
    },
];

const catalogItems = [
    {
        id: 1,
        itemNumber: "100101",
        name: "Housing",
    },
    {
        id: 2,
        itemNumber: "100102",
        name: "Rotor",
    },
    {
        id: 3,
        itemNumber: "100103",
        name: "Bearing",
    },
    {
        id: 4,
        itemNumber: "100201",
        name: "Hex Bolt",
    },
    {
        id: 5,
        itemNumber: "100202",
        name: "Flat Washer",
    },
    {
        id: 6,
        itemNumber: "100203",
        name: "Hex Nut",
    },
    {
        id: 7,
        itemNumber: "200002",
        name: "Fastener Kit",
    },
    {
        id: 8,
        itemNumber: "200003",
        name: "Gearbox Assembly",
    },
];

const BOMManager = () => {

    return (
        <ThreePaneLayout
            leftDefaultSize="20%"
            centerDefaultSize="30%"
            rightDefaultSize="50%"
            leftMinSize={300}
            centerMinSize={350}
            rightMinSize={300}
            top={
                <Header
                    title="BoM Manager"
                    subtitle="Create and maintain assembly structures and component relationships"
                    icon={Network}
                />
            }
            left={
                <>
                    <Header
                        title="BoMs"
                        size="medium"
                    />
                    <Region>
                        <Section
                            scrollable
                        >
                            <List>
                                {boms.map((bom) => (
                                    <ListItem
                                        key={bom.id}
                                        title={`${bom.itemNumber} - ${bom.name}`}
                                        description={`Rev ${bom.revision}`}
                                    />
                                ))}
                            </List>
                        </Section>
                    </Region>
                    <Footer
                        variant="full"
                    >
                        <Button>
                            Create New BoM
                        </Button>
                    </Footer>
                </>
            }
            center={
                <>
                    <Header
                        title="BoM Structure"
                        size="medium"
                    />
                    <Region>
                        <Section
                            scrollable
                        >
                            <Tree
                                nodes={bomTree}
                            />
                        </Section>
                    </Region>
                    <Footer
                        variant="full"
                    >
                        <Button>
                            Add BoM Node
                        </Button>
                        <Button
                            color="danger"
                        >
                            Delete BoM Node
                        </Button>
                    </Footer>
                </>
            }
            right={
                <>
                    <Header
                        title="BoM Node Details"
                        size="medium"
                    />
                    <Region>
                        <Section
                            scrollable
                        >
                            <Form>
                                <Field
                                    label="Component"
                                    size="medium"
                                >
                                    <Selector
                                        options={catalogItems}
                                        getKey={(item) => item.id}
                                        getLabel={(item) =>
                                            `${item.itemNumber} - ${item.name}`
                                        }
                                        onChange={() => {}}
                                    />
                                </Field>

                                <Field
                                    label="Quantity"
                                    size="medium"
                                >
                                    <Input />
                                </Field>
                            </Form>
                        </Section>
                        <Footer>
                            <Button>
                                Save BoM
                            </Button>
                        </Footer>
                    </Region>
                </>
            }
        />
    );
};

export default BOMManager;