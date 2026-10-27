import { X, CalendarDays } from "lucide-react";

import OverlayShell from "../../../../shells/OverlayShell/OverlayShell";

import TwoPaneLayout from "../../../../layouts/TwoPaneLayout";
import Region from "../../../../layouts/components/Region/Region";
import Section from "../../../../layouts/components/Section/Section";

import Header from "../../../../components/composite/Header";
import Footer from "../../../../components/composite/Footer";

import Button from "../../../../components/primitive/Button";

import List from "../../../../components/composite/List/List";
import ListItem from "../../../../components/composite/List/components/ListItem";

import ForecastRecordRow from "./components/ForecastRecordRow/ForecastRecordRow";

interface ForecastManagmenetProps {
    onClose?: () => void;
}

const ForecastManagement = ({
    onClose,
}: ForecastManagmenetProps) => {
    return (
        <OverlayShell>
            <TwoPaneLayout
                top={
                    <Header
                        title="Forecast Management"
                        subtitle="Ford • Motor Assembly • Week 32"
                        icon={CalendarDays}
                        actions={
                            <Button
                                size="small"
                                color="ghost"
                                onClick={onClose}
                            >
                                <X className="size-4" />
                            </Button>
                        }
                    />
                }
                left={
                    <>
                        <Header
                            title="Weekly Schedule Overview"
                            size="medium"
                        />

                        <Region>
                            <Section
                                scrollable
                            >
                                <List>
                                    <ListItem
                                        isSelected
                                        title="Sun • Aug 2"
                                        description="12 Scheduled"
                                    />

                                    <ListItem
                                        title="Mon • Aug 3"
                                        description="18 Scheduled"
                                    />

                                    <ListItem
                                        title="Tue • Aug 4"
                                        description="21 Scheduled"
                                    />

                                    <ListItem
                                        title="Wed • Aug 5"
                                        description="15 Scheduled"
                                    />

                                    <ListItem
                                        title="Thu • Aug 6"
                                        description="9 Scheduled"
                                    />

                                    <ListItem
                                        title="Fri • Aug 7"
                                        description="20 Scheduled"
                                    />

                                    <ListItem
                                        title="Sat • Aug 8"
                                        description="5 Scheduled"
                                    />
                                </List>
                            </Section>
                        </Region>
                    </>
                }
                right={
                    <>
                        <Header
                            title="Sunday • Aug 2"
                            subtitle="12 Units Scheduled"
                            size="medium"
                        />

                        <Region>
                            <Section
                                scrollable
                            >
                                <div className="flex flex-col gap-lg">
                                    <ForecastRecordRow
                                        statusColor="var(--color-success)"
                                    />

                                    <ForecastRecordRow
                                        statusColor="#f59e0b"
                                    />

                                    <ForecastRecordRow
                                        statusColor="var(--color-danger)"
                                    />
                                </div>
                            </Section>

                            <Footer>
                                <Button
                                    color="ghost"
                                >
                                    Undo
                                </Button>

                                <Button>
                                    Save
                                </Button>
                            </Footer>
                        </Region>
                    </>
                }
            />
        </OverlayShell>
    );
};

export default ForecastManagement;