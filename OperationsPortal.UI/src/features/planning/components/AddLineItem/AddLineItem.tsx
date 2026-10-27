/*
Visible if:
Future Forecast Exists
OR
LastRefreshDate within 14 days
*/

import { X, PackagePlus } from "lucide-react";

import OverlayShell from "../../../../shells/OverlayShell/OverlayShell";
import OnePaneLayout from "../../../../layouts/OnePaneLayout";
import Region from "../../../../layouts/components/Region/Region";
import Section from "../../../../layouts/components/Section/Section";
import Header from "../../../../components/composite/Header";
import Footer from "../../../../components/composite/Footer";
import Form from "../../../../components/composite/Form";
import Field from "../../../../components/composite/Field";
import Selector from "../../../../components/primitive/Selector";
import Input from "../../../../components/primitive/Input";
import Button from "../../../../components/primitive/Button";

const customers = [
    {
        id: 1,
        name: "Ford",
    },
    {
        id: 2,
        name: "GM",
    },
];

const partNumbers = [
    {
        id: 1,
        name: "200001"
    },
    {
        id: 1,
        name: "200002"
    }
]

interface AddLineItemsProps {
    onClose: () => void,
}

const AddLineItem = ({ onClose }: AddLineItemsProps) => {
    return (
        <OverlayShell
            size="small"
        >
            <OnePaneLayout
                top={
                    <Header
                        title="New Shipment"
                        icon={PackagePlus}
                        subtitle="Select a customer and part number to create a shipment schedule entry."
                        actions={
                        <Button
                            size="small"
                            onClick={onClose}
                            color="ghost"
                        >
                            <X size={16} />
                        </Button>
                        }
                    />
                }
                content={
                    <>
                        <Region>
                            <Header
                                title="Shipment Details"
                                size="medium"
                            />
                            <Section>
                                <Form>
                                    <Field
                                        label="Customer"    
                                    >
                                        <Selector
                                            options={customers}
                                            value={null}
                                            onChange={(value) =>
                                                console.log(value)
                                            }
                                            getKey={(item) => item.id}
                                            getLabel={(item) => item.name}
                                        />
                                    </Field>

                                    <Field
                                        label="Part Number"    
                                    >
                                    <Selector
                                            options={partNumbers}
                                            value={null}
                                            onChange={(value) =>
                                                console.log(value)
                                            }
                                            getKey={(item) => item.id}
                                            getLabel={(item) => item.name}
                                        />
                                    </Field>

                                    <Field
                                        label="Description"    
                                    >
                                        <Input
                                            disabled
                                            type="text"
                                        >
                                        </Input>
                                    </Field>
                                </Form>
                            </Section>
                        </Region>
                        <Footer>
                            <Button>
                                Create Shipment
                            </Button>
                        </Footer>
                    </>
                }
            />
        </OverlayShell>
    );
};

export default AddLineItem;