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
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// The number of columns change by resizing the window
export default class MyWrapper extends React.Component {
  render() {
    return (
      <ResponsiveMasonry
        className="pb-[50px]"
        columnsCountBreakPoints={{ 350: 2, 450: 3, 900: 3, 1900: 3 }}
      >
        <Masonry gutter="10px">
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image1.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image2.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image3.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image4.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image5.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image6.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image7.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image8.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image9.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image10.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image11.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image12.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image13.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image14.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image15.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image16.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image17.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image18.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image19.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image20.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image21.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image22.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <LazyLoadImage
              effect="blur"
              src="/image23.jpeg"
              className="cursor-pointer"
            />
          </LightGallery>
        </Masonry>
      </ResponsiveMasonry>
    );
  }
}
