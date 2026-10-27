import { ClipboardClock } from "lucide-react";

import TwoPaneLayout from "../../../layouts/TwoPaneLayout";
import Region from "../../../layouts/components/Region/Region";
import Section from "../../../layouts/components/Section/Section";
import Header from "../../../components/composite/Header";
import Field from "../../../components/composite/Field";
import Selector from "../../../components/primitive/Selector";

import List from "../../../components/composite/List/List";
import ListItem from "../../../components/composite/List/components/ListItem";

const WorkOrder = () => {
    return (
        <TwoPaneLayout
            top={
                <Header
                    title="Work Orders"
                    icon={ClipboardClock}
                    subtitle="Execute production plans and track assembly progress."
                />
            }
            left={
                <>
                <Header
                    title="Tickets"
                    size="medium"
                />
                    <Region>
                        <Section scrollable>
                            <List>
                                <ListItem
                                    title="WO-10001 • Motor Assembly"
                                    description="Released • Qty 100"
                                    statusColor="var(--color-primary)"
                                    isSelected
                                />

                                <ListItem
                                    title="WO-10002 • Gearbox Assembly"
                                    description="In Progress • Qty 50"
                                    statusColor="#f59e0b"
                                />

                                <ListItem
                                    title="WO-10003 • Controller Module"
                                    description="Complete • Qty 200"
                                    statusColor="var(--color-success)"
                                />
                            </List>
                        </Section>
                    </Region>
                </>
            }
            right={

                <>
                    <Header
                        title="WO-10001 • Motor Assembly"
                        subtitle="100 Units • Due Nov 20"
                        size="medium"
                    />

                    <Region>
                        <Header
                            title="Summary"
                            size="small"
                        />
                        <Section
                        >
                            <div className="grid grid-cols-5 gap-lg">
                                <Field label="Assembly">
                                    <div className="text-medium font-medium">
                                        Motor Assembly
                                    </div>
                                </Field>

                                <Field label="Quantity">
                                    <div className="text-medium font-medium">
                                        100
                                    </div>
                                </Field>

                                <Field label="Status">
                                    <div className="text-medium font-medium">
                                        Released
                                    </div>
                                </Field>

                                <Field label="Assembly Time">
                                    <div className="text-medium font-medium">
                                        5 Days
                                    </div>
                                </Field>

                                <Field label="Forecast">
                                    <div className="text-medium font-medium">
                                        Ford • Motor Assembly
                                    </div>
                                </Field>
                            </div>
                        </Section>

                        <Header
                            title="Execution"
                            size="small"
                        />

                        <Section>
                            <div className="grid grid-cols-2 gap-lg">
                                <Field label="Work Order Status">
                                    <Selector
                                        options={[
                                            {
                                                id: "planned",
                                                label: "Planned",
                                            },
                                            {
                                                id: "released",
                                                label: "Released",
                                            },
                                            {
                                                id: "inProgress",
                                                label: "In Progress",
                                            },
                                            {
                                                id: "complete",
                                                label: "Complete",
                                            },
                                        ]}
                                        value={{
                                            id: "released",
                                            label: "Released",
                                        }}
                                        getKey={(item) => item.id}
                                        getLabel={(item) => item.label}
                                        onChange={() => {}}
                                        size="small"
                                    />
                                </Field>
                            </div>
                        </Section>

                        <Header
                            title="Timeline"
                            size="small"
                        />

                        <Section>
                            <div className="grid grid-cols-4 gap-lg">
                                <Field label="Created">
                                    <div className="text-medium font-medium">
                                        Nov 10
                                    </div>
                                </Field>

                                <Field label="Planned Start">
                                    <div className="text-medium font-medium">
                                        Nov 11
                                    </div>
                                </Field>

                                <Field label="Planned Completion">
                                    <div className="text-medium font-medium">
                                        Nov 18
                                    </div>
                                </Field>

                                <Field label="Forecast Due">
                                    <div className="text-medium font-medium">
                                        Nov 20
                                    </div>
                                </Field>
                            </div>
                        </Section>

                        <Header
                            title="Inventory Impact"
                            size="small"
                        />

                        <Section>
                            <div className="grid grid-cols-3 gap-lg">
                                <Field label="Finished Good">
                                    <div className="text-medium font-medium">
                                        Motor Assembly
                                    </div>
                                </Field>

                                <Field label="Quantity Created">
                                    <div className="text-medium font-medium">
                                        +100
                                    </div>
                                </Field>

                                <Field label="Inventory Transaction">
                                    <div className="text-medium font-medium">
                                        Pending Completion
                                    </div>
                                </Field>
                            </div>
                        </Section>
                    </Region>
                </>
            }
        />
    );
};

export default WorkOrder;