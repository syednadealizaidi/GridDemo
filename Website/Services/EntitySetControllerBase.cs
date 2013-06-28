using Demo.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Http.OData;
using System.Web.Http.OData.Query;

namespace Website.Services
{
    public abstract class EntitySetControllerBase<TEntity> : EntitySetController<TEntity, int> where TEntity : class
    {
        #region Get
        [Queryable(AllowedQueryOptions = AllowedQueryOptions.All)]
        public override IQueryable<TEntity> Get()
        {
            NorthwindContext Context = new NorthwindContext();
            return Context.Set<TEntity>();
        }
        [Queryable(AllowedQueryOptions = AllowedQueryOptions.All)]
        public override System.Net.Http.HttpResponseMessage Get(int key)
        {
            return base.Get(key);
        }
        #endregion
    }
}