import { Database, Plus, Save, Trash } from "lucide-react";

import ThreePaneLayout from "../../../layouts/ThreePaneLayout";

import Region from "../../../layouts/components/Region/Region";
import Section from "../../../layouts/components/Section/Section";

import Header from "../../../components/composite/Header";
import Footer from "../../../components/composite/Footer";
import List from "../../../components/composite/List/List";
import ListItem from "../../../components/composite/List/components/ListItem";
import Form from "../../../components/composite/Form";
import Field from "../../../components/composite/Field";

import Input from "../../../components/primitive/Input";
import Button from "../../../components/primitive/Button";
import Label from "../../../components/primitive/Label";

import useMasterData from "./useMasterData";

const MasterData = () => {
    const {
        selectedEntity,
        selectedRecord,

        entities,
        records,

        handleSelectEntity,
        handleSelectRecord,

        handleCreateRecord,
        handleDeleteRecord,
        handleSaveRecord,
    } = useMasterData();

    return (
        <ThreePaneLayout
            leftDefaultSize="15%"
            centerDefaultSize="25%"
            rightDefaultSize="60%"
            top={
                <Header
                    title="Manage Master Data"
                    subtitle="Create and maintain application reference data."
                    icon={Database}
                />
            }
            left={
                <>
                    <Header
                        title="Entities"
                        size="medium"
                    />

                    <Region>
                        <Section>
                            <Input
                                type="search"
                                placeholder="Search entities..."
                            />
                        </Section>

                        <Section scrollable>
                            <List>
                                {entities.map((entity) => (
                                    <ListItem
                                        key={entity.id}
                                        title={entity.name}
                                        isSelected={
                                            selectedEntity?.id === entity.id
                                        }
                                        onClick={() =>
                                            handleSelectEntity(entity)
                                        }
                                    />
                                ))}
                            </List>
                        </Section>
                    </Region>
                </>
            }
            center={
                <>
                    <Header
                        title={
                            selectedEntity?.name ??
                            "Records"
                        }
                        subtitle={`${records.length} items`}
                        size="medium"
                    />

                    <Region>
                        <Section>
                            <Input
                                type="search"
                                placeholder="Search records..."
                            />
                        </Section>

                        <Section scrollable>
                            {!selectedEntity ? (
                                <div className="flex h-full items-center justify-center p-lg">
                                    <Label size="medium">
                                        Select an entity to view records.
                                    </Label>
                                </div>
                            ) : (
                                <List>
                                    {records.map((record) => (
                                        <ListItem
                                            key={record.id}
                                            title={record.name}
                                            isSelected={
                                                selectedRecord?.id ===
                                                record.id
                                            }
                                            onClick={() =>
                                                handleSelectRecord(record)
                                            }
                                        />
                                    ))}
                                </List>
                            )}
                        </Section>
                    </Region>

                    <Footer variant="full">
                        <Button
                            onClick={handleCreateRecord}
                            disabled={!selectedEntity}
                        >
                            <Plus className="size-4" />
                            Create New Record
                        </Button>
                    </Footer>
                </>
            }
            right={
                <>
                    <Header
                        title={
                            selectedRecord
                                ? `${selectedRecord.name} Details`
                                : "Record Details"
                        }
                        size="medium"
                    />

                    <Region>
                        <Section scrollable>
                            {!selectedRecord ? (
                                <div className="flex h-full items-center justify-center p-lg">
                                    <Label size="medium">
                                        Select a record to view details.
                                    </Label>
                                </div>
                            ) : (
                                <>
                                    <Header
                                        title="Attributes"
                                        size="small"
                                    />

                                    <Form>
                                        <Field
                                            label="Name"
                                            size="medium"
                                        >
                                            <Input
                                                value={
                                                    selectedRecord.name
                                                }
                                                readOnly
                                            />
                                        </Field>

                                        <Field
                                            label="Code"
                                            size="medium"
                                        >
                                            <Input />
                                        </Field>

                                        <Field
                                            label="Description"
                                            size="medium"
                                        >
                                            <Input />
                                        </Field>
                                    </Form>
                                </>
                            )}
                        </Section>
                    </Region>

                    <Footer>
                        <Button
                            color="danger"
                            disabled={!selectedRecord}
                            onClick={handleDeleteRecord}
                        >
                            <Trash className="size-4" />
                            Delete Record
                        </Button>

                        <Button
                            disabled={!selectedRecord}
                            onClick={handleSaveRecord}
                        >
                            <Save className="size-4" />
                            Save Record
                        </Button>
                    </Footer>
                </>
            }
        />
    );
};

export default MasterData;