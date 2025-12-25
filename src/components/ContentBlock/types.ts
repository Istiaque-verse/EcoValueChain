export interface ContentBlockProps {
  icon: string;
  title: string;
  content:
    | string
    | {
        title: string;
        text?: string;
        unitPrice: string;
        unitLabel: string;
        currentStock: number;
        totalSold: number;
        image?: string;
      };
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: { title: string; color?: string }[] | string;
  id: string;
  direction: "left" | "right";
  t: any;
}
