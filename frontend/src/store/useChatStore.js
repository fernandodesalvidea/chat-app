import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
       //console.log("getMessages response:", res.data);
      set({ messages: Array.isArray(res.data.messages) ? res.data.messages : [] });

    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },
  sendMessage: async (messageData) => {
  const { selectedUser, messages } = get();
  try {
    const res = await axiosInstance.post(
      `/messages/send/${selectedUser._id}`,
      messageData
    );

    //console.log("sendMessage response:", res?.data);

    const newMessage = res?.data?.newMessage;
    if (!newMessage) {
      throw new Error("Backend did not return newMessage");
    }

    //  Ensure messages is an array before spreading
    const safeMessages = Array.isArray(messages) ? messages : [];

    set({ messages: [...safeMessages, newMessage] });

  } catch (error) {
    console.error("Failed to send message:", error);
    toast.error(error?.response?.data?.message || "Failed to send message");
  }
},

subscribeToMessages: () => {
  const { selectedUser } = get();
  if(!selectedUser) return;

  const  socket  = useAuthStore.getState().socket;

  //to do: fix error
  socket.on("newMessage", (newMessage) => {
    set({
      messages: [...get().messages, newMessage],
    });
  });
},

unsubscribeFromMessages: () => {
  const socket = useAuthStore.getState().socket;
  socket.off("newMessage");
},


  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));