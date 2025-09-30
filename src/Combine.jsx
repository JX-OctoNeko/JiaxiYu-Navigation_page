import React, { useState, useEffect } from "react";

// import 两个版本
import NormalCV from "./NormalCV";
import AcademicCV from "./AcademicCV";

export default function CVHomeWrapper() {
  const [viewMode, setViewMode] = useState(
    () => localStorage.getItem("viewMode") || "normal"
  );

  // 切换时存储
  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  // 解析 URL 参数，例如 ?view=academic
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const v = params.get("view");
    if (v === "academic" || v === "normal") {
      setViewMode(v);
    }
  }, []);

  return (
    <div>
      {/* 顶部切换按钮 */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setViewMode(viewMode === "normal" ? "academic" : "normal")}
          className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm"
        >
          Switch to {viewMode === "normal" ? "Academic" : "Normal"} View
        </button>
      </div>

      {/* 根据模式显示 */}
      {viewMode === "normal" ? <NormalCV /> : <AcademicCV />}
    </div>
  );
}
