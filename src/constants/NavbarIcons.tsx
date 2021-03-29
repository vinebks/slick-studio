import { FaUser, FaSquareFull, FaCloudUploadAlt } from 'react-icons/fa';
import { BsBagFill, BsCameraVideoFill } from 'react-icons/bs';
import { ImUsers } from 'react-icons/im';
import { IoIosPaper } from 'react-icons/io';
import { MdCompareArrows } from 'react-icons/md';
import { RiDeleteBinFill } from 'react-icons/ri';

export const NAVBAR_ICONS = {
  'My Profile': {
    icon: <FaUser />,
  },
  'Account Information': {
    icon: <BsBagFill />,
  },
  'Manage Users': {
    icon: <ImUsers />,
  },
  'Manage Customer': {
    icon: <FaSquareFull />,
  },
  Reports: {
    icon: <IoIosPaper />,
  },
  'Data Sharing': {
    icon: <MdCompareArrows />,
  },
  'Upload Data': {
    icon: <FaCloudUploadAlt />,
  },
  'Delete All Hydrants': {
    icon: <RiDeleteBinFill />,
  },
  'How To Videos': {
    icon: <BsCameraVideoFill />,
  },
};
