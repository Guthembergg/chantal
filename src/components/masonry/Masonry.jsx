import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider } from "react-lightgallery";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
// The number of columns change by resizing the window
export default class MyWrapper extends React.Component {
  render() {
    return (
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 450: 3, 900: 3, 1900: 3 }}
      >
        <Masonry columnsCount={5} gutter="10px">
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image1.jpeg" />{" "}
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image2.jpeg" />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image3.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image4.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image5.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image6.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image7.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image8.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image9.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image10.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image11.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image12.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image13.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image14.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image15.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image16.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image17.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image18.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image19.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image20.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image21.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image22.jpeg" />
          </LightGallery>{" "}
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="/image23.jpeg" />
          </LightGallery>
        </Masonry>
      </ResponsiveMasonry>
    );
  }
}
