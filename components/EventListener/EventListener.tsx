import events from "@/json/events/events";
import { useRouter } from "next/router";
import { OptionsObject, SnackbarMessage, useSnackbar } from "notistack";
import { useCallback, useEffect } from "react";
import eventEmitter from "services/event.emitter";

export default function EventListeners() {
    const { enqueueSnackbar } = useSnackbar();
    const showNotifications = useCallback(
      (data: { message: SnackbarMessage; options?: OptionsObject }) => {
        enqueueSnackbar(data.message, data.options);
      },
      []
    );
    useEffect(() => {
      eventEmitter.on(events.showNotification, showNotifications);
      return () => {
        eventEmitter.off(events.showNotification, showNotifications);
      };
    }, []);
  
    
    // const { logoutMutation, isLoggedIn } = useAuth();
    // useEffect(() => {
    //   if (isLoggedIn) {
    //     eventEmitter.on(events.logoutCurrentUser, logoutMutation.logout);
    //   }
    //   return () => {
    //     eventEmitter.off(events.logoutCurrentUser, logoutMutation.logout);
    //   };
    // }, [isLoggedIn]);
  
  
    const router = useRouter();
    const handleRoutes = useCallback((pathName: string) => {
      router.push(pathName);
    }, []);
  
    useEffect(() => {
      eventEmitter.on(events.routerPush, handleRoutes);
      return () => {
        eventEmitter.off(events.routerPush, handleRoutes);
      };
    }, []);
  
    return null;
  }
  