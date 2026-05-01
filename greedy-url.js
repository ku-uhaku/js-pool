const regGetURL = /https?:\/\/\S+/g;

const regGreedyQuery = /https?:\/\/\S+\?\S+=\S+&\S+=\S+&\S+=\S+/g;

const getURL = (dataSet) => {
    return dataSet.match(regGetURL) || [];
};

const greedyQuery = (dataSet) => {
    return dataSet.match(regGreedyQuery) || [];
};

const notSoGreedy = (dataSet) => {
    return dataSet.match(regGetURL).filter((ele) => {
        return ele.split("&").length <= 3 && ele.split("&").length >= 2 && ele;
    });
};
