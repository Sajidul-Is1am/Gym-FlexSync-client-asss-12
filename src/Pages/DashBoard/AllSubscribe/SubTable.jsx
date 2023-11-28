/* eslint-disable react/prop-types */

const SubTable = ({ item, index }) => {
    const {email,name} = item
    return (
      <div>
        {/* row 1 */}
        <tr className=" grid grid-cols-4 justify-center">
                <th>{ index+1}</th>
                <td>{ name}</td>
                <td>{ email}</td>
                <td className="">Delete</td>
        </tr>
      </div>
    );
};

export default SubTable;