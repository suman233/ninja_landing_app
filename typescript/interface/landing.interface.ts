export interface LandingRoot {
  message: string;
  statusCode: number;
  data: Data;
}
export interface Data {
  _id: string;
  banner_text_1: string;
  banner_text_2: string;
  banner_text_3: string;
  play_store_url: string;
  app_store_url: string;
  box_1_header: string;
  box_2_header: string;
  box_3_header: string;
  box_1_text: string;
  box_2_text: string;
  box_3_text: string;
  how_to_use_hdr: string;
  how_to_use_sub_hdr: string;
  how_to_use_content_hdr_1: string;
  how_to_use_content_hdr_2: string;
  how_to_use_content_hdr_3: string;
  how_to_use_content_text_1: string;
  how_to_use_content_text_2: string;
  how_to_use_content_text_3: string;
  how_to_use_image: string;
  features_hdr: string;
  features_sub_hdr: string;
  features_content_hdr_1: string;
  features_content_hdr_2: string;
  features_content_hdr_3: string;
  features_content_text_1: string;
  features_content_text_2: string;
  features_content_text_3: string;
  features_image: string;
  image: string;
  how_to_use_content_hdr_4: string;
  how_to_use_content_text_4: string;
  updatedAt: string;
  contact_content: string;
  contact_hdr: string;
  labelValue: string | undefined;
}
