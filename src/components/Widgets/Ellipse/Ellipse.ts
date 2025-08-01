import { COLORS } from "../../../shared/constants";
import type { Widget } from "../../../types/widgets";
import { COMMON_PROPS, PROPERTY_SCHEMAS } from "../../../types/widgetProperties";
import { EllipseComp } from "./EllipseComp";
import CircleIcon from "@mui/icons-material/Circle";

const { borderRadius, ...COMMON_PROPS_MINUS_BORDER_RADIUS } = COMMON_PROPS;

export const Ellipse: Widget = {
  id: "__Ellipse__",
  component: EllipseComp,
  widgetName: "Ellipse",
  widgetIcon: CircleIcon,
  widgetLabel: "Ellipse",
  category: "Basic",
  editableProperties: {
    ...COMMON_PROPS_MINUS_BORDER_RADIUS,
    backgroundColor: { ...PROPERTY_SCHEMAS.backgroundColor, value: COLORS.lightGray },
    width: { ...PROPERTY_SCHEMAS.width, value: 80 },
    height: { ...PROPERTY_SCHEMAS.height, value: 80 },
  },
} as const;
