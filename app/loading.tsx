import BackgroundOverlay from '@/components/BackgroundOverlay/BackgroundOverlay';
import Loader from '@/components/Loader/Loader';

export default function Loading() {
  return (
    <>
      <BackgroundOverlay isActive={true} isOverAll={true} />
      <div className="loaderContainer">
        <Loader />
      </div>
    </>
  );
}
