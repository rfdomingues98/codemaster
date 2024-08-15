import type { ComponentProps } from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DocumentIcon,
  FolderIcon,
  FolderOpenIcon,
  MicrophoneIcon,
  PhoneIcon,
  PhoneXMarkIcon,
  PlayIcon,
  UserIcon,
  VideoCameraIcon,
  VideoCameraSlashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { VscCaseSensitive, VscRegex, VscWholeWord } from "react-icons/vsc";

type Props = ComponentProps<typeof PlayIcon>;
function IconShellSolid(props: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    />
  );
}
function IconShellOutline(props: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    />
  );
}

export const icons = {
  Logo: (props: Props & { theme: "light" | "dark" }) => (
    <IconShellOutline {...props} viewBox="0 0 470 516">
      {props.theme === "light" ? (
        <path
          d="M53 169.5L5 197.5M53 169.5L235 274M53 169.5V113.5M5 197.5V254.5L135.5 329V369.5M5 197.5L183.5 300.5V510M5 351L135.5 426.5V369.5M5 351V405L183.5 510M5 351L53 323.5L135.5 369.5M183.5 510L235 482.5M235 274V482.5M235 274L414 169.5M235 482.5L282.5 510M282.5 510L333.5 482.5V329L364.5 311.478M282.5 510V300.5L464.5 197.5M414 435.5V283.5L364.5 311.478M414 435.5L364.5 405V311.478M414 435.5L464.5 405V197.5M464.5 197.5L414 169.5M414 169.5V113.5M53 113.5L235 218L414 113.5M53 113.5L235 6L282.5 36.5M414 113.5L364.5 83.5L235 164L198.5 142.813M282.5 36.5L148 113.5L198.5 142.813M282.5 36.5V95.5L198.5 142.813"
          stroke="#7936EC"
          strokeWidth="20"
        />
      ) : (
        <path
          d="M53 169.5L5 197.5M53 169.5L235 274M53 169.5V113.5M5 197.5V254.5L135.5 329V369.5M5 197.5L183.5 300.5V510M5 351L135.5 426.5V369.5M5 351V405L183.5 510M5 351L53 323.5L135.5 369.5M183.5 510L235 482.5M235 274V482.5M235 274L414 169.5M235 482.5L282.5 510M282.5 510L333.5 482.5V329L364.5 311.478M282.5 510V300.5L464.5 197.5M414 435.5V283.5L364.5 311.478M414 435.5L364.5 405V311.478M414 435.5L464.5 405V197.5M464.5 197.5L414 169.5M414 169.5V113.5M53 113.5L235 218L414 113.5M53 113.5L235 6L282.5 36.5M414 113.5L364.5 83.5L235 164L198.5 142.813M282.5 36.5L148 113.5L198.5 142.813M282.5 36.5V95.5L198.5 142.813"
          stroke="#CBA6F7"
          strokeWidth="20"
        />
      )}
    </IconShellOutline>
  ),
  Play: (props: Props) => <PlayIcon {...props} />,
  User: (props: Props) => <UserIcon {...props} />,
  ChevronDown: (props: Props) => <ChevronDownIcon {...props} />,
  ChevronRightIcon: (props: Props) => <ChevronRightIcon {...props} />,
  VideoCamera: (props: Props) => <VideoCameraIcon {...props} />,
  VideoCameraSlashIcon: (props: Props) => <VideoCameraSlashIcon {...props} />,
  MicrophoneIcon: (props: Props) => <MicrophoneIcon {...props} />,
  PhoneIcon: (props: Props) => <PhoneIcon {...props} />,
  PhoneXMarkIcon: (props: Props) => <PhoneXMarkIcon {...props} />,
  FolderIcon: (props: Props) => <FolderIcon {...props} />,
  FolderOpenIcon: (props: Props) => <FolderOpenIcon {...props} />,
  DocumentIcon: (props: Props) => <DocumentIcon {...props} />,
  CloseIcon: (props: Props) => <XMarkIcon {...props} />,
  CaseSensitiveIcon: (props: Props) => <VscCaseSensitive {...props} />,
  RegExIcon: (props: Props) => <VscRegex {...props} />,
  WholeWordIcon: (props: Props) => <VscWholeWord {...props} />,
  ArrowUpIcon: (props: Props) => <ArrowUpIcon {...props} />,
  ArrowDownIcon: (props: Props) => <ArrowDownIcon {...props} />,

  Javascript: (props: Props) => (
    <IconShellSolid {...props}>
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </IconShellSolid>
  ),
  Typescript: (props: Props) => (
    <IconShellSolid {...props}>
      <path d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
    </IconShellSolid>
  ),
  Python: (props: Props) => (
    <IconShellSolid {...props}>
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
    </IconShellSolid>
  ),
  C: (props: Props) => (
    <IconShellSolid {...props}>
      <path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z" />
    </IconShellSolid>
  ),
  CSharp: (props: Props) => (
    <IconShellSolid {...props} viewBox="0 0 128 128">
      <path d="M109 50h-4.8l-1.2 6h-3.8l1.2-6h-4.9l-1.2 6H89v5h4.4l-.9 4H89v5h2.5l-1.2 6h4.8l1.2-6h3.8l-1.2 6h4.9l1.2-6h5v-5h-4.1l.9-4h3.2v-5h-2.2l1.2-6zm-7.9 15h-3.8l.9-4h3.8l-.9 4zm15.4-32.7c-.6-1.1-1.4-2.1-2.3-2.6L66.1 1.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7L11.4 29.7c-1.7 1-3.4 3.5-3.4 5.4v55.7c0 1.1.7 2.3 1.4 3.4l.1.1c.5.8 1.3 1.5 2 1.9l48.3 27.9c.8.5 2 .7 3.2.7 1.2 0 2.3-.3 3.1-.7l47.5-27.9c1.7-1 2.4-3.5 2.4-5.4V35.1c0-.8.4-1.8 0-2.6l.5-.2zm-4.2 2.1c0 .3-.3.5-.3.7v55.7c0 .8-.2 1.7-.4 2L64 120.6c-.1.1-.5.2-1.1.2-.6 0-1-.1-1.1-.2L13.6 92.8s-.1-.1-.2-.1l-.6-.6c-.4-.7.2-1.1-.8-1.2V35.2c1-.5.9-1.7 1.4-1.9L61.7 5.4c.1 0 .6-.2 1.2-.2s1 .1 1.1.2l48 27.7.4.9c.1.1-.1.3-.1.4zM63 87.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6C80.1 82.5 72.1 87.5 63 87.5z" />
    </IconShellSolid>
  ),
  Cpp: (props: Props) => (
    <IconShellSolid {...props}>
      <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" />
    </IconShellSolid>
  ),
  Scala: (props: Props) => (
    <IconShellSolid {...props}>
      <path d="M4.589 24c4.537 0 13.81-1.516 14.821-3v-5.729c-.957 1.408-10.284 2.912-14.821 2.912V24zM4.589 16.365c4.537 0 13.81-1.516 14.821-3V7.636c-.957 1.408-10.284 2.912-14.821 2.912v5.817zM4.589 8.729c4.537 0 13.81-1.516 14.821-3V0C18.453 1.408 9.126 2.912 4.589 2.912v5.817z" />
    </IconShellSolid>
  ),
  Ruby: (props: Props) => (
    <IconShellSolid {...props}>
      <path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z" />
    </IconShellSolid>
  ),
};
