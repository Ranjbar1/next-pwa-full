import AudioReactRecorder, {
  RecordState,
} from "@/components/AudioReactRecorder2";
import React, { useState } from "react";

const App = (props: any) => {
  const [state, setState] = useState<any>({
    recordState: null,
    audioData: null,
  });
  const start = () => {
    setState({ recordState: RecordState.START });
  };
  const pause = () => {
    setState({
      recordState: RecordState.PAUSE,
    });
  };
  const stop = () => {
    setState({
      recordState: RecordState.STOP,
    });
  };

  const onStop = (data: any) => {
    setState({
      audioData: data,
    });
    console.log("onStop: audio data", data);
  };
  return (
    <div>
      <AudioReactRecorder
        state={state.recordState}
        onStop={onStop}
        backgroundColor="rgb(255,255,255)"
      />
      <audio
        id="audio"
        controls
        src={state.audioData ? state.audioData.url : null}
      ></audio>
      <button id="record" onClick={start}>
        Start
      </button>
      <button id="pause" onClick={pause}>
        Pause
      </button>
      <button id="stop" onClick={stop}>
        Stop
      </button>
    </div>
  );
};
export default App;
// class App extends React.Component<any, any> {
//   constructor(props: any) {
//     super(props);

//     this.state = {
//       recordState: null,
//       audioData: null,
//     };
//   }

//   start = () => {
//     this.setState({
//       recordState: RecordState.START,
//     });
//   };

//   pause = () => {
//     this.setState({
//       recordState: RecordState.PAUSE,
//     });
//   };

//   stop = () => {
//     this.setState({
//       recordState: RecordState.STOP,
//     });
//   };

//   onStop = (data: any) => {
//     this.setState({
//       audioData: data,
//     });
//     console.log("onStop: audio data", data);
//   };

//   render() {
//     const { recordState } = this.state;

//     return (
//       <div>
//         <AudioReactRecorder
//           state={recordState}
//           onStop={this.onStop}
//           backgroundColor="rgb(255,255,255)"
//         />
//         <audio
//           id="audio"
//           controls
//           src={this.state.audioData ? this.state.audioData.url : null}
//         ></audio>
//         <button id="record" onClick={this.start}>
//           Start
//         </button>
//         <button id="pause" onClick={this.pause}>
//           Pause
//         </button>
//         <button id="stop" onClick={this.stop}>
//           Stop
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
