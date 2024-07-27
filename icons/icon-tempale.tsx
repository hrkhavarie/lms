// import BaseIcon from "@/app/_components/icons/base-icon";
// import { SvgIcon } from "@/app/_components/icons/icon.types";

import BaseIcon from "@/app/_components/icons/src/base-icon";
import { SvgIcon } from "@/app/_components/icons/src/icon.types";

export default function SvgIcon(props:SvgIcon) {
  return (
    <BaseIcon {...props}>
      <%= contents %>
    </BaseIcon>
  );
}