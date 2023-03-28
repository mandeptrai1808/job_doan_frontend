import React from "react";


export default function Bathangdau() {
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold border-b-4 mb-2 w-fit pr-10 border-red-500">
          GIAI ĐOẠN 3 THÁNG ĐẦU MẸ NÊN ĂN GÌ?
        </h1>
        <div>
          <div className="md:flex md:justify-end">
            <div className="md:w-1/5 mr-5 flex flex-col items-end text-center">
              <p className="p-2 pl-5 mb-2 w-full text-left font-bold rounded-lg bg-slate-200">
                Năng lượng
              </p>
              <p className="p-2 mb-2 rounded-lg w-2/3 bg-slate-100">
                2100kcal/ngày
              </p>
            </div>
            <div className="md:w-1/5 mr-5 flex flex-col items-end text-center">
              <p className="p-2 pl-5 mb-2 w-full text-left font-bold rounded-lg bg-slate-200">
                Tinh bột
              </p>
              <p className="p-2 mb-2 rounded-lg w-2/3 bg-slate-100">
                360g/ngày
              </p>
            </div>
            <div className="md:w-1/5 mr-5 flex flex-col items-end text-center">
              <p className="p-2 pl-5 mb-2 w-full text-left font-bold rounded-lg bg-slate-200">
                Chất đạm
              </p>
              <p className="p-2 mb-2 rounded-lg w-2/3 bg-slate-100">61g/ngày</p>
            </div>
            <div className="md:w-1/5 mr-5 flex flex-col items-end text-center">
              <p className="p-2 pl-5 mb-2 w-full text-left font-bold rounded-lg bg-slate-200">
                Chất béo
              </p>
              <p className="p-2 mb-2 rounded-lg w-2/3 bg-slate-100">60g/ngày</p>
            </div>
            <div className="md:w-1/5 mr-5 flex flex-col items-end text-center">
              <p className="p-2 pl-5 mb-2 w-full text-left font-bold rounded-lg bg-slate-200">
                Chất xơ
              </p>
              <p className="p-2 mb-2 rounded-lg w-2/3 bg-slate-100">28g/ngày</p>
            </div>
          </div>
        </div>

        <h2 className="text-red-400 font-bold text-xl mt-10">Món chính</h2>
      </div>
    </div>
  );
}
