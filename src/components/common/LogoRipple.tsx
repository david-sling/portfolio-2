import { Logo } from "@/assets/icons/Logo";

const sizes = {
  ripple1: 870,
  ripple2: 550,
  core: 250,
  gap: 50,
};

export const LogoRipple = () => (
  <div className="rounded-full flex items-center justify-center relative">
    <div
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
        height: sizes.ripple1,
        minWidth: sizes.ripple1,
      }}
      className="flex items-center rounded-full justify-center bg-primary-100"
    >
      <div
        style={{
          height: sizes.ripple2 + sizes.gap,
          minWidth: sizes.ripple2 + sizes.gap,
        }}
        className="flex items-center rounded-full justify-center bg-dark"
      >
        <div
          style={{
            height: sizes.ripple2,
            minWidth: sizes.ripple2,
          }}
          className="flex items-center rounded-full justify-center bg-primary-200"
        >
          <div
            style={{
              height: sizes.core + sizes.gap,
              minWidth: sizes.core + sizes.gap,
            }}
            className="flex items-center rounded-full justify-center bg-dark"
          ></div>
        </div>
      </div>
    </div>
    <div
      style={{
        height: sizes.core,
        minWidth: sizes.core,
      }}
      className="bg-primary absolute rounded-full flex items-center justify-center"
    >
      <Logo className="translate-x-2" />
    </div>
  </div>
);
