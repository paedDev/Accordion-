import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
    return (
        <ul className="mb-0 mt-0">
            {list && list.length
                ? list.map((listItem, index) => (
                    <MenuItem key={index}
                        item={listItem} />))
                : null}
        </ul>
    );
}