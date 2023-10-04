import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// The number of columns change by resizing the window
export default class MyWrapper extends React.Component {
  render() {
    return (
      <ResponsiveMasonry
      // columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry columnsCount={3} gutter="10px">
          <img src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" />
          <img src="https://picsum.photos/1200/1300" />
          <img src="https://picsum.photos/880/600" />
          <img src="https://picsum.photos/1920/1080" />
          <img src="https://picsum.photos/1200/1300" />
          <img src="https://picsum.photos/900/400" />
          <img src="https://picsum.photos/920/780" />
          <img src="https://picsum.photos/1200/300" />
          <img src="https://picsum.photos/770/600" />
          <img src="https://picsum.photos/1620/1480" />
        </Masonry>
      </ResponsiveMasonry>
    );
  }
}
