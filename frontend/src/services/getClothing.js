export default function get_clothing(num_of_items) {
  const clothMetaData = [
    "Long body coverage",
    "White or pastel colours",
    "UV absorbers",
    "Moisture content",
    "More layering Fabric",
  ];
  num_of_items =
    num_of_items >= clothMetaData.length
      ? clothMetaData.length - 1
      : num_of_items;
  return clothMetaData
    .sort(() => Math.random() - Math.random())
    .slice(0, num_of_items);
}
