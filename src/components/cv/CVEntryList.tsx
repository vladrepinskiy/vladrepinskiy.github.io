import type { CVEntry } from "@/types/cv.types";
import { CvEntry } from "@/components/cv/CvEntry";

export const CVEntryList = ({ entries }: { entries: CVEntry[] }) => {
  return (
    <div>
      {entries.map((entry) => (
        <CvEntry key={entry.company + entry.title} entry={entry} />
      ))}
    </div>
  );
};
