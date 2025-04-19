const Item = require("../model/ItemModel");

const getAllItems = async (req, res) => {
  try {
    const result = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items", error: error.message });
  }
};

const getSearchedItems = async (req, res) => {
  const { q } = req.query;
  const searchTerm = q?.trim();

  try {
    let items;
    if (searchTerm) {
      console.log("🔍 Search query:", searchTerm);
      items = await Item.find({ name: { $regex: searchTerm, $options: "i" } });
    } else {
      items = await Item.find();
    }
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Error searching items", error: error.message });
  }
};

const getSingleItem = async (req, res) => {
  const { id } = req.params;
  console.log("📦 getSingleItem called with ID:", id);

  try {
    const item = await Item.findById(id);
    if (!item) {
      console.log("❌ No item found with that ID");
      return res.status(404).json({ message: 'Item not found' });
    }

    console.log("✅ Item found:", item.name);
    res.status(200).json(item);
  } catch (error) {
    console.error("🚨 Error in getSingleItem:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getAllItems,
  getSearchedItems,
  getSingleItem,
};
