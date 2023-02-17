import ChevronBarDownIcon from './icons/ChevronBarDownIcon';
import ChevronDown from './icons/ChevronDown';
import Close from './icons/Close';
import DateIcon from './icons/DateIcon';
import Download from './icons/Download';
import EyesClose from './icons/EyesClose';
import EyesOpen from './icons/EyesOpen';
import FileEarmarkArrowDownIcon from './icons/FileEarmarkArrowDownIcon';
import FileEarmarkPlusIcon from './icons/FileEarmarkPlusIcon';
import Logout from './icons/Logout';
import Plus from './icons/Plus';
import SearchIcon from './icons/SearchIcon';
import ToastError from './icons/ToastError';
import ToastMessage from './icons/ToastMessage';
import ToastSuccess from './icons/ToastSuccess';
import ToastWarning from './icons/ToastWarning';
import UploadIcon from './icons/UploadIcon';

// Icon paths
export const icons = {
  Search: <SearchIcon />,
  Date: <DateIcon />,
  FileEarmarkArrowDown: <FileEarmarkArrowDownIcon />,
  Upload: <UploadIcon />,
  FileEarmarkPlus: <FileEarmarkPlusIcon />,
  ChevronBarDown: <ChevronBarDownIcon />,
  EyesClose: <EyesClose />,
  EyesOpen: <EyesOpen />,
  ToastSuccess: <ToastSuccess />,
  ToastError: <ToastError />,
  ToastWarning: <ToastWarning />,
  ToastMessage: <ToastMessage />,
  Close: <Close />,
  Download: <Download />,
  Logout: <Logout />,
  Plus: <Plus />,
  ChevronDown: <ChevronDown />,
} as const;
