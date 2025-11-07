

export default function Home() {

  return (
    <div>
      <div className="flex justify-center">
        <p>Fællesspisning</p>
      </div>

      <div className="relative overflow-hidden shadow-md rounded-lg">
        <table className="table-auto w-full text-left">
          <thead className=" bg-[#afc1e5] text-[#3f4146]">
            <tr>
              <td className="py-3    p-4"> November </td>
              <td className="py-3    p-4"></td>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-500 bg-[#FFFFFF] text-[#6b7280]">
            <tr className=" py-5">
              <td className=" py-5 border  border-gray-300   p-4">DATO</td>
              <td className=" py-5 border  border-gray-300   p-4">HOST</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
