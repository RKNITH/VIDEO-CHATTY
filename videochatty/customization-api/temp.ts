//exporting for simple-practice demo

import VideoRenderer from '../src/pages/video-call/VideoRenderer';
import {DispatchContext} from '../agora-rn-uikit';
import WhiteboardView from '../src/components/whiteboard/WhiteboardView';
import {
  useWhiteboard,
  whiteboardContext,
} from '../src/components/whiteboard/WhiteboardConfigure';
import {useVideoCall} from '../src/components/useVideoCall';
import {useScreenshare} from '../src/subComponents/screenshare/useScreenshare';
import EndcallPopup from '../src/subComponents/EndcallPopup';
import useSTTAPI from '../src/subComponents/caption/useSTTAPI';
import {useCaption} from '../src/subComponents/caption/useCaption';
import useMuteToggleLocal, {
  MUTE_LOCAL_TYPE,
} from '../src/utils/useMuteToggleLocal';
import {RoomPhase} from 'white-web-sdk';
import {useScreenContext} from '../src/components/contexts/ScreenShareContext';
import {filterObject} from '../src/utils/index';
import {useToggleWhiteboard} from '../src/components/Controls';
import {ShowInputURL} from '../src/components/Share';
import useRemoteMute, {MUTE_REMOTE_TYPE} from '../src/utils/useRemoteMute';
import getCustomRoute from '../src/utils/getCustomRoute';
import useEndCall from '../src/utils/useEndCall';

export {
  VideoRenderer,
  DispatchContext,
  WhiteboardView,
  whiteboardContext,
  useVideoCall,
  useScreenshare,
  EndcallPopup,
  useSTTAPI,
  useCaption,
  useWhiteboard,
  useMuteToggleLocal,
  MUTE_LOCAL_TYPE,
  RoomPhase,
  useScreenContext,
  filterObject,
  useToggleWhiteboard,
  ShowInputURL,
  useRemoteMute,
  MUTE_REMOTE_TYPE,
  getCustomRoute,
  useEndCall,
};
