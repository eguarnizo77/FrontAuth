import { useState, useCallback } from "react";

const useUser = () => {  
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isOpenMdl, setIsOpenMdl] = useState(false);
  const [userData, setUserData] = useState({});
  const [imgProfile, setImgProfile] = useState({});

  const editImgProfile = useCallback(
    (image) => {            
      setImgProfile(image);                  
    },
    [setImgProfile]
  );

  const editUserData = useCallback(
    (data) => {            
      setUserData(data);                  
    },
    [setUserData]
  );

  const editUser = useCallback(
    (value) => {            
      setIsEditProfile(value);                  
    },
    [setIsEditProfile]
  );

  const openModal = useCallback(
    (value) => {            
      setIsOpenMdl(value);                    
    },
    [setIsOpenMdl]
  );
  
  return {
    editUser,
    isEdit : isEditProfile,
    editUserData,
    userData : userData,
    openModal,
    isOpenModal : isOpenMdl,
    editImgProfile,
    imageProfile: imgProfile
  };
};

export default useUser;
