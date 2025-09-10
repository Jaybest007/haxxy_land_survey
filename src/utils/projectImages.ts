// This file maps project titles to their corresponding image folders in the assets directory

import control2018_1 from '../assets/conrol_establishment_2018/2018_land_control.jpg';
import control2018_2 from '../assets/conrol_establishment_2018/2018_land_control1.jpg';
import control2018_3 from '../assets/conrol_establishment_2018/2018_land_control2.jpg';
import control2018_4 from '../assets/conrol_establishment_2018/2018_land_control3.jpg';

import aerial2023_1 from '../assets/aerial_project_2023/1.jpg';
import aerial2023_2 from '../assets/aerial_project_2023/2.jpg';
import aerial2023_3 from '../assets/aerial_project_2023/3.jpg';
import aerial2023_4 from '../assets/aerial_project_2023/4.jpg';

import nepza2022_1 from '../assets/nepza_2022/npeza_1.jpg';
import nepza2022_2 from '../assets/nepza_2022/nepza_2.jpg';
import nepza2022_3 from '../assets/nepza_2022/nepza_3.jpg';
import nepza2022_4 from '../assets/nepza_2022/nepza_4.jpg';

import sewage_1 from '../assets/sewage/1.jpg';
import sewage_2 from '../assets/sewage/2.jpg';
import sewage_3 from '../assets/sewage/3.jpg';

import water2024_1 from '../assets/water_2024/1.jpg';
import water2024_2 from '../assets/water_2024/2.jpg';

import tanks_1 from '../assets/Tanks-As-Built/1.jpg';
import tanks_2 from '../assets/Tanks-As-Built/2.jpg';
import tanks_3 from '../assets/Tanks-As-Built/3.jpg';
import tanks_4 from '../assets/Tanks-As-Built/4.jpg';

// Default fallback images by category
import landDefault from '../assets/land_survey_pic.jpg';
import aerialDefault from '../assets/aerial_survey_pic.jpg';
import hydroDefault from '../assets/Hydrographic.png';
import tankDefault from '../assets/Tanks-As-Built/1.jpg';

// Project image collections by project title keywords
const projectImageMap = {
  'Control Establishment': [control2018_1, control2018_2, control2018_3, control2018_4],
  'Pipeline Route': [sewage_1, sewage_2, sewage_3], // Using sewage images as a substitute
  'Bathymetric': [water2024_1, water2024_2],
  'Muhammadu Buhari': [nepza2022_1, nepza2022_2, nepza2022_3, nepza2022_4], // Using NEPZA images as substitute
  'Aerial Mapping': [aerial2023_1, aerial2023_2, aerial2023_3, aerial2023_4],
  'Sewage Pipeline': [sewage_1, sewage_2, sewage_3],
  'Tanks As-Built': [tanks_1, tanks_2, tanks_3, tanks_4]
};

// Helper function to get project images based on project title
export const getProjectImages = (projectTitle: string) => {
  for (const key in projectImageMap) {
    if (projectTitle.includes(key)) {
      return projectImageMap[key as keyof typeof projectImageMap];
    }
  }
  
  // Fallback to default image by category
  return null;
};

// Helper function to get the main image for a project (first image in collection)
export const getMainProjectImage = (projectTitle: string, category: string) => {
  const images = getProjectImages(projectTitle);
  
  if (images && images.length > 0) {
    return images[0];
  }
  
  // Return default category image if no specific images found
  if (category === "Land") {
    return landDefault;
  } else if (category === "Aerial") {
    return aerialDefault;
  } else if (category === "tank") {
    return tankDefault;
  } else {
    return hydroDefault;
  }
};

// Helper function to get default image by category
export const getDefaultCategoryImage = (category: string) => {
  if (category === "Land") {
    return landDefault;
  } else if (category === "Aerial") {
    return aerialDefault;
  } else if (category === "tank") {
    return tankDefault;
  } else {
    return hydroDefault;
  }
};
