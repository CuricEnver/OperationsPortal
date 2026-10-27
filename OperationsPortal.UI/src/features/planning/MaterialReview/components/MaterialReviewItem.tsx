import { useState } from "react";

import { Wrench } from "lucide-react";

import Field from "../../../../components/composite/Field";

import Button from "../../../../components/primitive/Button";

interface AcquisitionOption {
    id: number;

    type: "purchase" | "transfer";

    source: string;

    quantity: number;

    leadTimeDays: number;

    unitCost?: number;

    availableQuantity?: number;
}


interface MaterialReviewItemProps {
    itemNumber: string;
    description: string;

    requiredQuantity: number;
    availableQuantity: number;

    shortageQuantity?: number;
    remoteQuantity?: number;

    status: string;

    suggestedAction: string;

    acquisitionOptions: AcquisitionOption[];
}

const MaterialReviewItem = ({
    itemNumber,
    description,

    requiredQuantity,
    availableQuantity,

    shortageQuantity = 0,
    remoteQuantity = 0,

    status,

    suggestedAction,

    acquisitionOptions,
}: MaterialReviewItemProps) => {
    const [isAddressing, setIsAddressing] =
        useState(false);

    const statusColor =
        status === "shortage"
            ? "var(--color-danger)"
            : status === "action-issued"
                ? "#f59e0b"
                : "var(--color-success)";

    const statusLabel =
        status === "shortage"
            ? "Shortage"
            : status === "action-issued"
                ? "Action Issued"
                : "Resolved";

    return (
        <div
            className="mt-xs flex flex-col border-b border-b-(--color-border-strong)] border-l-[3px] p-md"
            style={{
                borderLeftColor: statusColor,
            }}
        >
            <div className="grid grid-cols-[2fr_100px_100px_100px_240px_120px] items-end gap-md">
                <div className="min-w-0">
                    <div className="text-medium font-medium text-text-strong">
                        {description}
                    </div>

                    <div className="text-small text-text-subtle">
                        Part #{itemNumber}
                    </div>
                </div>

                <Field label="Required">
                    <div className="text-medium font-medium">
                        {requiredQuantity}
                    </div>
                </Field>

                <Field label="Available">
                    <div className="text-medium font-medium">
                        {availableQuantity}
                    </div>
                </Field>

                <Field
                    label={
                        shortageQuantity > 0
                            ? "Shortage"
                            : remoteQuantity > 0
                                ? "Remote"
                                : "Status"
                    }
                >
                    <div className="text-medium font-medium">
                        {shortageQuantity > 0
                            ? shortageQuantity
                            : remoteQuantity > 0
                                ? remoteQuantity
                                : "Ready"}
                    </div>
                </Field>

                <Field label="Recommended">
                    <div className="text-medium font-medium">
                        {suggestedAction}
                    </div>
                </Field>

                {status !== "resolved" ? (
                    <Button
                        size="small"
                        onClick={() =>
                            setIsAddressing(
                                !isAddressing,
                            )
                        }
                    >
                        {isAddressing ? (
                            "Hide"
                        ) : (
                            <>
                                <Wrench className="size-4" />
                                Acquire
                            </>
                        )}
                    </Button>
                ) : (
                    <Field label="Status">
                        <div className="text-medium font-medium text-success">
                            Resolved
                        </div>
                    </Field>
                )}
            </div>

            <div className="mt-sm">
                <Field label="Status">
                    <div className="text-medium font-medium">
                        {statusLabel}
                    </div>
                </Field>
            </div>

                {isAddressing &&
                    status === "shortage" && (
                        <div className="mt-md border-t border-border-light pt-md">
                            <div className="flex flex-col gap-md">
                                {acquisitionOptions.map(
                                    (option) => {
                                        const isPurchase =
                                            option.type ===
                                            "purchase";

                                        return (
                                            <div
                                                key={
                                                    option.id
                                                }
                                                className="rounded border border-border-light p-md"
                                            >
                                                {isPurchase ? (
                                                    <div className="grid grid-cols-[160px_100px_100px_120px_120px_auto] items-end gap-md">
                                                        <Field label="Supplier">
                                                            <div className="text-medium font-medium">
                                                                {
                                                                    option.source
                                                                }
                                                            </div>
                                                        </Field>

                                                        <Field label="Quantity">
                                                            <div className="text-medium font-medium">
                                                                {
                                                                    option.quantity
                                                                }
                                                            </div>
                                                        </Field>

                                                        <Field label="Lead Time">
                                                            <div className="text-medium font-medium">
                                                                {
                                                                    option.leadTimeDays
                                                                }{" "}
                                                                Days
                                                            </div>
                                                        </Field>

                                                        <Field label="Unit Cost">
                                                            <div className="text-medium font-medium">
                                                                $
                                                                {(
                                                                    option.unitCost ??
                                                                    0
                                                                ).toFixed(
                                                                    2,
                                                                )}
                                                            </div>
                                                        </Field>

                                                        <Field label="Total Cost">
                                                            <div className="text-medium font-medium">
                                                                $
                                                                {(
                                                                    (option.unitCost ??
                                                                        0) *
                                                                    option.quantity
                                                                ).toFixed(
                                                                    2,
                                                                )}
                                                            </div>
                                                        </Field>

                                                        <Button size="small">
                                                            Create PO
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <div className="grid grid-cols-[180px_100px_100px_120px_auto] items-end gap-md">
                                                        <Field label="Location">
                                                            <div className="text-medium font-medium">
                                                                {
                                                                    option.source
                                                                }
                                                            </div>
                                                        </Field>

                                                        <Field label="Available">
                                                            <div className="text-medium font-medium">
                                                                {option.availableQuantity ??
                                                                    option.quantity}
                                                            </div>
                                                        </Field>

                                                        <Field label="Required">
                                                            <div className="text-medium font-medium">
                                                                {
                                                                    option.quantity
                                                                }
                                                            </div>
                                                        </Field>

                                                        <Field label="Lead Time">
                                                            <div className="text-medium font-medium">
                                                                {
                                                                    option.leadTimeDays
                                                                }{" "}
                                                                Days
                                                            </div>
                                                        </Field>

                                                        <Button size="small">
                                                            Transfer
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    },
                                )}
                            </div>
                        </div>
                )}

            {isAddressing &&
                status ===
                    "action-issued" && (
                    <div className="mt-md border-t border-border-light pt-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-medium font-medium">
                                    Acquisition
                                    In Progress
                                </div>

                                <div className="text-small text-text-subtle">
                                    Waiting for
                                    material to be
                                    received and
                                    inventory to
                                    update.
                                </div>
                            </div>

                            <Button
                                size="small"
                                color="ghost"
                                onClick={() =>
                                    setIsAddressing(
                                        false,
                                    )
                                }
                            >
                                Close
                            </Button>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default MaterialReviewItem;