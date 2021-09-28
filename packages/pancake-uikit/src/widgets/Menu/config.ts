import { noop } from "lodash";
import { DropdownMenuItems, DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { MenuItemsType } from "../../components/MenuItems/types";
import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links: MenuItemsType[] = [
  {
    label: "Starter Pack",
    href: "/",
    icon: "Swap",
  },
  {
    label: "Marketplace",
    href: "/marketplace",
    icon: "Earn",
  },
  {
    label: "Inventory",
    href: "/my-zoans",
    icon: "Trophy",
    items: [
      {
        label: "My Zoans",
        href: "/my-zoans",
      },
      {
        label: "My Items",
        href: "/my-stones",
      },
    ],
  },
  {
    label: "Merge Zoans",
    href: "/merge",
    icon: "Earn",
  },
  {
    label: "Fight Monster",
    href: "/",
    icon: "fight-monster",
  },
  // {
  //   label: "",
  //   href: "/",
  //   icon: "More",
  //   items: [
  //     {
  //       label: "Info & Analytics",
  //       href: "/",
  //     },
  //     {
  //       label: "IFO Token Sales",
  //       href: "/",
  //       status: status.SOON,
  //     },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: "NFT Collectibles",
  //       href: "/",
  //     },
  //     {
  //       label: "Team Leaderboard",
  //       href: "/",
  //     },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: "Blog",
  //       href: "/",
  //     },
  //     {
  //       label: "Docs & Guides",
  //       href: "/",
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //   ],
  // },
];

export const userMenulinks: DropdownMenuItems[] = [
  {
    label: "Wallet",
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
  {
    label: "Transactions",
    type: DropdownMenuItemType.BUTTON,
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Dashboard",
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Portfolio",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    type: DropdownMenuItemType.EXTERNAL_LINK,
    href: "https://pancakeswap.finance",
    label: "Link",
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    onClick: noop,
    label: "Disconnect",
  },
];

export const MENU_HEIGHT = 56;
export const MENU_ENTRY_HEIGHT = 48;
export const MOBILE_MENU_HEIGHT = 44;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
