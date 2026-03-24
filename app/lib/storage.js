export const getRequests = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("requests");
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const saveRequest = (request) => {
  const requests = getRequests();
  request.id = Date.now();
  request.status = "Bekliyor";
  requests.push(request);
  localStorage.setItem("requests", JSON.stringify(requests));
};

export const deleteRequest = (id) => {
  let requests = getRequests();
  requests = requests.filter((req) => req.id !== id);
  localStorage.setItem("requests", JSON.stringify(requests));
};

export const updateStatus = (id, status) => {
  let requests = getRequests();
  requests = requests.map((req) =>
    req.id === id ? { ...req, status } : req
  );
  localStorage.setItem("requests", JSON.stringify(requests));
};