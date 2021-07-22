import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://player.vimeo.com/external/573961784.sd.mp4?s=05824253972a5ce320b3f2c02919661a578ea958&profile_id=165&oauth2_token_id=57447761"
          channel="brij117"
          description="this works!!"
          song="99 problems but react aint one"
          likes={111}
          shares={222}
          messages={333}
        />
        <Video
          url="https://player.vimeo.com/external/554676721.sd.mp4?s=9187226d183a5a394a177d4454973f5c3a9d03c1&profile_id=165&oauth2_token_id=57447761"
          channel="brij117"
          description="this works!!"
          song="99 problems but react aint one"
          likes={111}
          shares={222}
          messages={333}
        />
        {/* <Video /> 1:45:54 - start of backend */}
      </div>
    </div>
  );
}

export default App;
