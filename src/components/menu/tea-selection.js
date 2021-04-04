function TeaSelection(props) {
  const menu = props.menu;

  return (
    <div className={"c-tea-selection"}>
      <h2 className={"font-weight-bold"}>{menu.title}</h2>
      <h3>{menu.chineseTitle}</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className={"text-center"}>
              Hot <br />
              (M)
            </th>
            <th className={"text-center"}>
              Iced <br />
              (M)
            </th>
            <th className={"text-center"}>
              Iced <br />
              (L)
            </th>
          </tr>
        </thead>
        <tbody>
          {menu.menuItems.map(function (item) {
            return (
              <tr className={"item-row"} key={`tea-${item.title}`}>
                <td className={"item-name"}>
                  <h4>{item.title}</h4>
                  <div className={"item-chinese-name"}>{item.chineseTitle}</div>
                </td>
                <td className={"text-center"}>
                  {(item.mediumHotPrice / 100).toFixed(2)}
                </td>
                <td className={"text-center"}>
                  {(item.mediumIcedPrice / 100).toFixed(2)}
                </td>
                <td className={"text-center"}>
                  {(item.largeIcedPrice / 100).toFixed(2)}
                </td>
              </tr>
            );
          })}
          {menu.comingSoon && (
            <tr>
              <td className={"item-name"}>
                <h4>More coming soon</h4>
              </td>
              <td />
              <td />
              <td />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TeaSelection;
