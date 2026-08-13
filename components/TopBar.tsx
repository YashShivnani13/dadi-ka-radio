import Clock from "./Clock";
import ListenerCount from "./ListenerCount";
import SocialLinks from "./SocialLinks";

export default function TopBar() {
  return (
    <header
      className="topbar-enter fixed inset-x-0 top-0 z-20 flex items-start justify-between"
      style={{
        paddingTop: "max(0.9rem, env(safe-area-inset-top))",
        paddingLeft: "max(1rem, env(safe-area-inset-left))",
        paddingRight: "max(1rem, env(safe-area-inset-right))",
      }}
    >
      <Clock />

      <div className="absolute left-1/2 top-[0.95rem] -translate-x-1/2">
        <ListenerCount />
      </div>

      <SocialLinks />
    </header>
  );
}
