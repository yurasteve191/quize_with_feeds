export const fetchConfig = async () => {
  const timestamp = new Date().getTime();
  const url = `data/config.json?${timestamp}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch config:", error);
  }
};


export const calculateStartWindow = (config) => {
  console.log(config);
  const { introductoryWindow } = config;
  if(introductoryWindow.active){
    return 'introductory';
  }
  return 'quize';
};

