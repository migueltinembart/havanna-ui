import Img from '../assets/logo.png';

export default function Header(): JSX.Element {
  return (
    <>
      <div className="w-full flex justify-between items-end px-8">
        <div className="flex gap-12 items-end">
          <div>
            <img src={Img} alt="Logo" className="w-20" />
          </div>
          <div>
            <div>BreadCrumbs to Implement</div>
            <div>Current Directory</div>
          </div>
        </div>
        <div>Search Field | Profile |Sign In | Settings |</div>
      </div>
    </>
  );
}
