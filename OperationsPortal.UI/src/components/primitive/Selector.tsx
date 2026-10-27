import Select from "react-select";

interface SelectorProps<T> {
    options: T[],
    value?: T | null,
    onChange: (value: T | null) => void,
    placeholder?: string,
    getKey: (item: T) => string | number,
    getLabel: (item: T) => string,
    searchable?: boolean,
    clearable?: boolean,
    disabled?: boolean,
    size?: "small" | "medium" | "large",
};

const sizeStyles = {
    small: {
        control: "min-h-[30px]",
        text: "text-small",
        option: "p-sm",
        indicator: "p-xs",
    },
    medium: {
        control: "min-h-[36px]",
        text: "text-medium",
        option: "p-sm",
        indicator: "p-sm",
    },
    large: {
        control: "min-h-[42px]",
        text: "text-large",
        option: "p-md",
        indicator: "p-sm",
    },
};

const Selector = <T,>({
    options = [],
    value = null,
    onChange,
    placeholder = "Select...",
    getKey,
    getLabel,
    searchable = true,
    clearable = false,
    disabled = false,
    size = "medium",
}: SelectorProps<T>) => {

    const styles = sizeStyles[size];

    return (
        <Select<T>
            unstyled
            options={options}
            value={value}
            onChange={(selected) => onChange(selected)}
            getOptionLabel={getLabel}
            getOptionValue={(item) => String(getKey(item))}
            placeholder={placeholder}
            isSearchable={searchable}
            isDisabled={disabled}
            isClearable={clearable}

            classNames={{
                // internal components of Selector being styled
                container: () =>
                    "w-full",

                control: ({ isFocused }) =>
                    `border-y transition-colors ${styles.control} ${
                        isFocused
                            ? "border-primary"
                            : "border-border-light"
                    }`,

                valueContainer: () =>
                    "flex-nowrap",

                singleValue: () =>
                    `font-medium text-primary ${styles.text}`,

                placeholder: () =>
                    `font-medium text-text-subtle ${styles.text}`,

                input: () =>
                    styles.text,

                dropdownIndicator: () =>
                    `text-text-subtle ${styles.indicator}`,

                clearIndicator: () =>
                    `text-text-subtle ${styles.indicator}`,

                indicatorSeparator: () =>
                    "my-xs w-px bg-border-light",

                menu: () =>
                    "overflow-hidden border border-border-strong bg-surface",

                menuList: () =>
                    "p-0",

                option: ({ isFocused, isSelected }) =>
                    `border-b border-border-light text-text-neutral ${styles.option} ${
                        isSelected
                            ? "bg-primary-light font-semibold text-primary"
                            : isFocused
                                ? "bg-primary-light"
                                : "bg-surface"
                    }`,
            }}
        />
    );
};

export default Selector;