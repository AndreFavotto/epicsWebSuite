import { PROPERTY_SCHEMAS } from "../../types/widgets";
import type { Widget } from "../../types/widgets";
import { GridZoneComp } from "./GridZoneComp";

// not added to registry, but kept as a special type of widget for consistency
export const GridZone: Widget = {
  id: "grid",
  componentName: "GridZone",
  component: GridZoneComp,
  widgetLabel: "GridZone",
  category: "Grid",
  editableProperties: {
    backgroundColor: PROPERTY_SCHEMAS.backgroundColor,
    gridLineColor: PROPERTY_SCHEMAS.gridLineColor,
    gridSize: PROPERTY_SCHEMAS.gridSize,
  },
} as const;
