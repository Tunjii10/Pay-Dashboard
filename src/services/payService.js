import axios from "axios";

export class PayService {
  static login(userCredentials) {
    // const headers = null;
    let dataUrl = `${import.meta.env.VITE_URL}/login`;
    return axios.post(dataUrl, userCredentials);
  }

  static fetchOrders(userId) {
    let dataUrl = `${import.meta.env.VITE_URL}/user-orders`;
    return axios.post(dataUrl, userId);
  }

  static getInfo(userId) {
    let dataUrl = `${import.meta.env.VITE_URL}/get-info`;
    return axios.post(dataUrl, userId);
  }

  static logout(userId) {
    let dataUrl = `${import.meta.env.VITE_URL}/logout`;
    return axios.post(dataUrl, userId);
  }
}
