declare namespace API {
  type CreateOrgReq = {
    domains?: string[];
    org?: string;
  };

  type getAssetListParams = {
    /** 信息源 */
    source?: string;
  };

  type getAssetRefreshParams = {
    /** 信息源 */
    source: string;
  };

  type JSONResult = {
    code?: number;
    data?: any;
    msg?: string;
  };

  type ListIPReq = {
    current?: number;
    pageSize?: number;
    subdomain?: string;
  };

  type ListJSReq = {
    current?: number;
    pageSize?: number;
    subdomain?: string;
  };

  type ListOrgReq = {
    current?: number;
    org?: string;
    pageSize?: number;
  };

  type ListPathReq = {
    current?: number;
    pageSize?: number;
    subdomain?: string;
  };

  type ListSubdomainReq = {
    current?: number;
    domain?: string;
    index_path?: string;
    is_alive?: string;
    is_public?: string;
    pageSize?: number;
    source_map?: string;
    status_code?: string;
    subdomain?: string;
  };

  type OrgScanReq = {
    orgs?: string[];
  };

  type PageableResult = {
    data?: any;
    success?: boolean;
    total?: number;
  };

  type ReverseIPReq = {
    current?: number;
    ip_addr?: string;
    pageSize?: number;
  };

  type ReverseJSReq = {
    current?: number;
    js_url?: string;
    pageSize?: number;
  };

  type ScheduleListReq = {
    current?: number;
    domain?: string;
    pageSize?: number;
  };

  type SetOrgCronReq = {
    cron?: string;
    org?: string;
  };

  type SubdomainRemarkReq = {
    remark?: string;
    subdomain?: string;
  };

  type SubdomainReq = {
    subdomain?: string;
  };

  type TaskListReq = {
    current?: number;
    domain?: string;
    pageSize?: number;
    taskStatus?: string;
  };

  type TaskSubmitReq = {
    domain?: string[];
    org?: string;
    rescan?: boolean;
  };
}
