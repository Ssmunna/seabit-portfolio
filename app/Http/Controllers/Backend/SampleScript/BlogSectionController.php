<?php

namespace App\Http\Controllers\Backend\SampleScript;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\BlogSection\BlogSectionStatusChangeRequest;
use App\Http\Requests\Backend\BlogSection\BlogSectionStoreRequest;
use App\Http\Requests\Backend\BlogSection\BlogSectionUpdateRequest;
use App\Http\Services\Backend\BlogSectionService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogSectionController extends Controller
{

    public function __construct( private readonly BlogSectionService $service){}

    /**
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function getList(Request $request): Response|RedirectResponse
    {
        $response = $this->handleSession( $this->service->getListData( $request->query(), SAMPLE_SCRIPT_PAGE));

        return $response['success'] ?
            Inertia::render('Backend/SampleScript/BlogSection/Page', $response)
            : back()->withErrors($response['message']);

    }

    /**
     * @param BlogSectionStoreRequest $request
     * @return RedirectResponse
     */
    public function store(BlogSectionStoreRequest $request): RedirectResponse
    {
        $response = $this->handleSession( $this->service->storeData( $request->all(), SAMPLE_SCRIPT_PAGE));

        return $response['success'] ?
            back()->with($response)
            : back()->withErrors($response['message']);
    }


    /**
     * @param BlogSectionUpdateRequest $request
     * @return RedirectResponse
     */
    public function update(BlogSectionUpdateRequest $request): RedirectResponse
    {
        $response = $this->handleSession( $this->service->updateData( $request->all(), SAMPLE_SCRIPT_PAGE));

        return $response['success'] ?
            back()->with($response)
            : back()->withErrors($response['message']);
    }


    /**
     * @param BlogSectionStatusChangeRequest $request
     * @return RedirectResponse
     */
    public function changeStatus (BlogSectionStatusChangeRequest $request): RedirectResponse
    {
        $response = $this->service->changeBlogStatus( $request->all(), SAMPLE_SCRIPT_PAGE);
        return $response['success'] ?
            back()->with($response)
            : back()->withErrors($response['message']);
    }


    /**
     * @param string $id
     * @return RedirectResponse
     */
    public function destroy (string $id): RedirectResponse
    {
        $response = $this->service->deleteBlog( $id, SAMPLE_SCRIPT_PAGE);
        return $response['success'] ?
            back()->with($response)
            : back()->withErrors($response['message']);
    }

}
