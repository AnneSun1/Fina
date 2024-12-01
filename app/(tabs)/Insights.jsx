import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PieChart from "react-native-pie-chart";

// Sample data
const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    "monthly-budget": 400,
    spendings: [
      { date: "2024-11-29", category: "Food", spending: 20 },
      { date: "2024-11-29", category: "Other", spending: 2 },
      { date: "2024-11-20", category: "Other", spending: 18 },
      { date: "2024-11-15", category: "Shopping", spending: 70 },
    ],
  },
  {
    id: 2,
    name: "Bob Johns",
    email: "bob@gmail.com",
    "monthly-budget": 1000,
    spendings: [
      { date: "2024-11-29", category: "Food", spending: 200 },
      { date: "2024-11-29", category: "Other", spending: 2 },
      { date: "2024-11-20", category: "Other", spending: 15 },
      { date: "2024-11-15", category: "Shopping", spending: 200 },
    ],
  },
];

const getCategoryColor = (category) => {
  const categoryColors = {
    Food: "#FF6347", // Tomato Red
    Other: "#4682B4", // SteelBlue
    Shopping: "#32CD32", // LimeGreen
  };
  return categoryColors[category] || "#000000"; // Default to black if category color is not defined
};

const Insights = () => {
  const [selectedUser, setSelectedUser] = useState(data[0]); // Default to first user

  const totalSpending = selectedUser.spendings.reduce(
    (acc, curr) => acc + curr.spending,
    0
  );
  const totalBudget = selectedUser["monthly-budget"];

  const categoryData = selectedUser.spendings.reduce((acc, curr) => {
    const { category, spending } = curr;
    if (!acc[category]) {
      acc[category] = { spending: 0, color: getCategoryColor(category) };
    }
    acc[category].spending += spending;
    return acc;
  }, {});

  const pieData = Object.keys(categoryData).map((category) => {
    return {
      value: categoryData[category].spending,
      color: categoryData[category].color,
      label: category,
    };
  });

  const values = pieData.map((d) => d.value);
  const colors = pieData.map((d) => d.color);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          color: "#3E5295", // Custom Blue
          fontWeight: "500",
        }}
      >
        Expense Insights
      </Text>
      <Text
        style={{
          fontSize: 30,
          color: "#000000",
          textAlign: "center",
        }}
      >
        You have used up {((totalSpending / totalBudget) * 100).toFixed(2)}% of
        your budget so far
      </Text>
      <PieChart
        widthAndHeight={200}
        series={values}
        sliceColor={colors}
        doughnut={true}
        coverRadius={0.5}
        coverFill="#FFF"
      />
      <View style={{ marginTop: 20 }}>
        {data.map((user, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedUser(user)}
            style={{
              padding: 10,
              backgroundColor: "#4682B4",
              borderRadius: 5,
              marginVertical: 5,
            }}
          >
            <Text style={{ fontSize: 18, color: "#fff" }}>
              Switch to {user.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Insights;

/*
======VERSION 1======
import { View, Text } from "react-native";
import React from "react";
import { PieChart } from "react-native-svg-charts";
import { Text as SvgText } from "react-native-svg";
import { G, Circle } from "react-native-svg";

const insights = () => {
  const data = [
    //key value pairs for expense categories
    { key: 1, value: 50, svg: { fill: "#f00" }, label: "Red" },
    { key: 2, value: 30, svg: { fill: "blue" }, label: "Green" },
    { key: 3, value: 20, svg: { fill: "green" }, label: "Blue" },
  ];
  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      return (
        <SvgText
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={14}
        >
          {data.value}%
        </SvgText>
      );
    });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Text
        style={{
          fontSize: 45,
          color: "#3E5295",
          fontWeight: "400",
          fontFamily: "Imprima",
        }}
      >
        Expense Insights
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: "#5A6BAF",
          fontFamily: "Imprima",
          marginTop: 20,
          marginBottom: 10,
          fontWeight: "100",
        }}
      >
        You have used up 50% of your budget so far
      </Text>
      <PieChart
        style={{ height: 200, width: 200, marginTop: 20, borderRadius: 50 }}
        data={data}
        innerRadius="50%"
        padAngle={0.02}
        outerRadius="100%"
        border="black"
      >
        <Labels />
      </PieChart>
      <Circle
        style={{ borderRadius: 50 }}
        cx="100"
        cy="100"
        r="95"
        stroke="black"
        strokeWidth="2"
      />
    </View>
  );
};

export default insights;
======VERSION 1======
*/

/*
======VERSION 2======
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { Text as SvgText } from "react-native-svg";
import { G, Circle } from "react-native-svg";

// Fetch the data from the local users.json file
const fetchData = async () => {
  const response = await fetch("/users.json"); // Path to the users.json file in the public folder
  const data = await response.json();
  return data;
};

const Insights = () => {
  const [userData, setUserData] = useState(null);

  // Fetch the data when the component mounts
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setUserData(data);
    };
    loadData();
  }, []);

  if (!userData) {
    return <Text>Loading...</Text>; // Loading state while fetching data
  }

  // Assuming we are processing data for the first user
  const user = userData[0]; // Example: use the first user for simplicity

  // Step 1: Calculate total spending
  const totalSpending = user.spendings.reduce(
    (acc, curr) => acc + curr.spending,
    0
  );
  const totalBudget = user["monthly-budget"];

  // Step 2: Calculate the percentage of spending for each category
  const categoryData = user.spendings.reduce((acc, curr) => {
    const { category, spending } = curr;
    if (!acc[category]) {
      acc[category] = { spending: 0, color: getCategoryColor(category) };
    }
    acc[category].spending += spending;
    return acc;
  }, {});

  // Step 3: Create the data array for the pie chart
  const pieData = Object.keys(categoryData).map((category, index) => {
    const categorySpending = categoryData[category].spending;
    const percentage = ((categorySpending / totalBudget) * 100).toFixed(2);
    return {
      key: index + 1,
      value: parseFloat(percentage),
      svg: { fill: categoryData[category].color },
      label: category,
    };
  });

  // Helper function to get category color (or assign a default color)
  const getCategoryColor = (category) => {
    const categoryColors = {
      Food: "#FF6347", // Tomato Red
      Other: "#4682B4", // SteelBlue
      Shopping: "#32CD32", // LimeGreen
    };
    return categoryColors[category] || "#000000"; // Default to black if category color is not defined
  };

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      return (
        <SvgText
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={14}
        >
          {data.value}%
        </SvgText>
      );
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          color: "#3E5295", // Custom Blue
          fontWeight: "500",
        }}
      >
        Expense Insights
      </Text>
      <Text
        style={{
          fontSize: 30,
          color: "#000000",
        }}
      >
        You have used up {((totalSpending / totalBudget) * 100).toFixed(2)}% of
        your budget so far
      </Text>
      <PieChart
        style={{ height: 200, width: 200, marginTop: 20 }}
        data={pieData}
        innerRadius="50%"
        padAngle={0.02}
        outerRadius="100%"
      >
        <Labels />
      </PieChart>
      <Circle
        style={{ borderRadius: 50 }}
        cx="100"
        cy="100"
        r="95"
        stroke="black"
        strokeWidth="2"
      />
    </View>
  );
};

export default Insights;
======VERSION 2======
*/
/*
======VERSION 3======
import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
//import { PieChart } from "react-native-svg-charts";
import PieChart from "react-native-pie-chart";
import { Text as SvgText } from "react-native-svg";
import { G, Circle } from "react-native-svg";

// Sample data

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    "monthly-budget": 400,
    spendings: [
      { date: "2024-11-29", category: "Food", spending: 20 },
      { date: "2024-11-29", category: "Other", spending: 2 },
      { date: "2024-11-20", category: "Other", spending: 18 },
      { date: "2024-11-15", category: "Shopping", spending: 70 },
    ],
  },
  {
    id: 2,
    name: "Bob Johns",
    email: "bob@gmail.com",
    "monthly-budget": 1000,
    spendings: [
      { date: "2024-11-29", category: "Food", spending: 200 },
      { date: "2024-11-29", category: "Other", spending: 2 },
      { date: "2024-11-20", category: "Other", spending: 15 },
      { date: "2024-11-15", category: "Shopping", spending: 200 },
    ],
  },
];

const getCategoryColor = (category) => {
  const categoryColors = {
    Food: "#FF6347", // Tomato Red
    Other: "#4682B4", // SteelBlue
    Shopping: "#32CD32", // LimeGreen
  };
  return categoryColors[category] || "#000000"; // Default to black if category color is not defined
};

// Simulate fetching user data by ID
const fetchUserDataById = (userId) => {
  return new Promise((resolve) => {
    const user = data.find((user) => user.id === userId);
    setTimeout(() => resolve(user), 0); // No delay needed for direct data set
  });
};

const Insights = () => {
  const [selectedUser, setSelectedUser] = useState(data[0]); // Default to first user
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate fetching data when the component mounts or when the selected user changes
    const loadData = async () => {
      setLoading(true);
      const userData = await fetchUserDataById(selectedUser.id);
      setSelectedUser(userData);
      setLoading(false); // Ensure loading is set to false after the data is fetched
    };

    loadData();
  }, [selectedUser]); // Fetch when selectedUser changes

  // Step 1: Calculate total spending
  const totalSpending = selectedUser.spendings.reduce(
    (acc, curr) => acc + curr.spending,
    0
  );
  const totalBudget = selectedUser["monthly-budget"];

  // Step 2: Calculate the percentage of spending for each category
  const categoryData = selectedUser.spendings.reduce((acc, curr) => {
    const { category, spending } = curr;
    if (!acc[category]) {
      acc[category] = { spending: 0, color: getCategoryColor(category) };
    }
    acc[category].spending += spending;
    return acc;
  }, {});

  // Step 3: Create the data array for the pie chart
  const pieData = Object.keys(categoryData).map((category, index) => {
    const categorySpending = categoryData[category].spending;
    const percentage = ((categorySpending / totalBudget) * 100).toFixed(2);
    return {
      key: index + 1,
      value: parseFloat(percentage),
      svg: { fill: categoryData[category].color },
      label: category,
    };
  });

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      return (
        <SvgText
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={14}
        >
          {data.value}%
        </SvgText>
      );
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          color: "#3E5295", // Custom Blue
          fontWeight: "500",
        }}
      >
        Expense Insights
      </Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text
            style={{
              fontSize: 30,
              color: "#000000",
            }}
          >
            You have used up {((totalSpending / totalBudget) * 100).toFixed(2)}%
            of your budget so far
          </Text>
          <PieChart
            widthAndHeight={200}
            series={values}
            sliceColor={colors}
            doughnut={true}
            coverRadius={0.5}
            coverFill="#FFF"
          />
            <Labels />
          
         
      )}
      <View style={{ marginTop: 20 }}>
        {data.map((user, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedUser(user)}>
            <Text style={{ fontSize: 18, color: "#4682B4" }}>
              Switch to {user.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Insights;
*/
