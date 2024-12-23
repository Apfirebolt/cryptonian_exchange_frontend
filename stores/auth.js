import { defineStore } from "pinia";
import { ref } from "vue";
import httpClient from "../utils/interceptor.js";

export const useAuth = defineStore("auth", {
  state: () => ({
    profileData: null,
    loading: ref(false),
  }),

  getters: {
    getAuthData() {
      return this.authData;
    },
    getProfileData() {
      return this.profileData;
    },
    isLoading() {
      return this.loading;
    },
  },

  actions: {
    async loginAction(loginData) {
      try {
        const response = await httpClient.post("login", loginData);
        if (response.data) {
          this.authData = response.data;
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    async registerAction(registerData) {
      try {
        const response = await httpClient.post("register", registerData);
        if (response.data) {
          this.authData = response.data;
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    async getProfileDataAction() {
      try {
        const headers = {
          Authorization: `Bearer ${this.authData.access}`,
        };
        this.loading = true;
        const response = await httpClient.get("profile", { headers });
        if (response.data) {
          this.profileData = response.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
        this.loading = false
        return error;
      }
    },

    async updateProfileDataAction(profileData) {
      try {
        const headers = {
          Authorization: `Bearer ${this.authData.access}`,
        };
        console.log('Update Profile Data', headers)
        this.loading = true;
        const response = await httpClient.put("profile", profileData, { headers });
        if (response.data) {
          this.profileData = response.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
        this.loading = false
        return error;
      }
    },

    async changePassword (passwordData) {
      try {
        const headers = {
          Authorization: `Bearer ${this.authData.access}`,
        };
        this.loading = true;
        const response = await httpClient.put("change-password", passwordData, { headers });
        if (response.status === 204) {
          this.loading = false;
          toast.success("Password changed successfully!");
        }
      } catch (error) {
        console.log(error);
        this.loading = false
        return error;
      }
    },

    async changeProfileImage (imageData) {
      try {
        const headers = {
          Authorization: `Bearer ${this.authData.access}`,
        };
        const formData = new FormData();
        formData.append("image", imageData);
        this.loading = true;
        const response = await httpClient.put("change-profile-image", formData, { headers });
        if (response.data) {
          this.profileData = response.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
        this.loading = false
        return error;
      }
    },

    logout() {
      this.authData = null;
    },

    resetAuth() {
      this.authData = {};
    },
  },
});
