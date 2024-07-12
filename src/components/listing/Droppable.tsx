import { DragEvent, useState } from "react";

export function Droppable({
    insertSongAfter,
    currentSongId,
}: {
    currentSongId: number;
    insertSongAfter: (addAfter: number, toAdd: number) => void;
}) {
    const [active, setActive] = useState(false);
    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setActive(true);
    };

    const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
        const data = e.dataTransfer.getData("musicId");
        console.log(data);
        insertSongAfter(currentSongId, Number(data));
        setActive(false);
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={() => setActive(false)}
            onDrop={handleDragEnd}
            role="drappable"
            className={`h-3 container mx-auto ${
                active ? "bg-accent" : "bg-transparent"
            }`}></div>
    );
}
