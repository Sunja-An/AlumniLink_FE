import React from "react";

function Profile() {
  return <div>Profile</div>;
}

function StaticProfile() {
  return (
    <div className="min-w-10 w-[10vw] min-h-10 h-[10vw] rounded-full bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1] shadow-md" />
  );
}

export { Profile, StaticProfile };
