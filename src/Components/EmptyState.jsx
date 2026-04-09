import { BiFolderPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";


const EmptyState = ({
    title = "No items found",
    message = "It looks like you haven't added anything to this section yet.",
    onAction,
    actionLabel = "Add your first item"
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
            {/* Icon with a soft background blob */}
            <div className="relative mb-6">
                <div className="absolute inset-0 scale-150 blur-xl opacity-20 bg-indigo-400 rounded-full"></div>
                <div className="relative flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <BiFolderPlus className="w-8 h-8 text-indigo-500" />
                </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
                {title}
            </h3>

            <p className="mt-2 text-sm text-slate-500 max-w-70 leading-relaxed">
                {message}
            </p>

            {onAction && (
                <button
                    onClick={onAction}
                    className="group mt-8 inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-indigo-600 transition-all duration-300 shadow-lg shadow-slate-200"
                >
                    {actionLabel}
                    <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            )}
        </div>
    );
};

export default EmptyState;